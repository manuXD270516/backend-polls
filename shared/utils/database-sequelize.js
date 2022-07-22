/**
 * @author manuel saavedra
 * @email saavedramanuel100@gmail.com
 * @create date 2020-07-14 20:51:22
 * @modify date 2021-09-15 11:22:41
 * @desc [description]
 */
const { Op } = require('sequelize');

const moment = require('moment');
const { asyncForEach, addParamsToAllObjects } = require('./arrays');

let paramsUpdated = () => {
  return { UpdatedIn: moment(), ActionStatus: 'U' };
};
let paramsDeleted = () => {
  return { DeletedIn: moment(), ActionStatus: 'D' };
};

// methods

let upsert = async (model, fields, conditions) => {
  let entityFind = await model.findOne({ where: conditions });
  if (entityFind) {
    entityFind.isUpdatedRecord = false;
    // only do update is value is different from queried object from db
    for (var key in fields) {
      let valueFoUpdate = fields[key];
      if (parseFloat(entityFind[key]) !== valueFoUpdate) {
        entityFind.isUpdatedRecord = true;
        await entityFind.update(fields);
      }
    }
    if (entityFind.isUpdatedRecord) {
      await entityFind.update({ ...paramsUpdated() });
    }
    return entityFind;
  } else {
    // insert
    let merged = { ...fields, ...conditions }; // test method
    let updated = await model.create(merged);
    return updated[0];
  }
};

let bulkUpsert = async (model, entities) => {
  await asyncForEach(entities, async (entityParam) => {
    /*console.log('entity param...');
    console.log(entityParam);*/

    //let { Identifier: { value = 0, keyId = false } = false } = entityParam;
    let [primaryKey] = model.primaryKeyAttributes;
    let condition = {};
    if (entityParam[primaryKey]) {
      condition[primaryKey] = entityParam[primaryKey];
    } else {
      condition[primaryKey] = false;
    }
    // TODO: FIX UNDEFINED KEY/VALUE
    /*if (value && keyId) {
      condition[keyId] = value;
    } else {
      condition[primaryKey] = 0;
    }*/
    //console.log('Generic Condition: ', condition);
    let entityFind = await model.findOne({ where: condition });

    if (entityFind) {
      entityFind.isUpdatedRecord = false;

      delete entityParam.Identifier;

      // only do update is value is different from queried object from db
      for (var key in entityParam) {
        let valueFoUpdate = entityParam[key];
        /*console.log('key: ', key);
        console.log('entityFind[key]: ', entityFind[key]);
        console.log('valueFoUpdate: ', valueFoUpdate);*/
        if (entityFind[key] != valueFoUpdate) {
          entityFind.isUpdatedRecord = true;
          await entityFind.update(entityParam);
        }
      }
      if (entityFind.isUpdatedRecord) {
        await entityFind.update({ ...paramsUpdated() });
      }
      return entityFind;
    } else {
      // insert
      let merged = { ...entityParam };
      let updated = await model.create(merged);
      return updated[0];
    }
  });
};

let bulkDelete = async (model, entitiesIds = []) => {
  let [primaryKey] = model.primaryKeyAttributes;
  let filter = {};
  filter[primaryKey] = {
    [Op.in]: entitiesIds,
  };
  console.log('filter for deleted....');
  console.log(filter);
  if (entitiesIds.length) {
    let deleted = await model.update(
      { ...paramsDeleted() },
      {
        where: filter,
      }
    );
    return deleted[0];
  }
  return entitiesIds.length;
};

let bulkRefresh = async (model, entities = [], criteriaFilter = false) => {
  entities = addParamsToAllObjects(entities, criteriaFilter);

  let [primaryKey] = model.primaryKeyAttributes;

  // identify primary keys
  //let entitiesParamsIdsFix = entities.map(entity => entity[primaryKey] || false);
  let entitiesParamsIdsFix = entities.flatMap((entity) =>
    entity[primaryKey] ? [entity[primaryKey]] : []
  );

  //let entitiesParamsIds = entities.map(({ Identifier: { value = 0 } = false }) => value);

  // Logs for Entities Mapped
  /*console.log('entties params ids...' );
  console.log(entitiesParamsIds);
  
  console.log('entties params ids fixed...' );
  console.log(entitiesParamsIdsFix);*/

  criteriaFilter[primaryKey] = { [Op.notIn]: entitiesParamsIdsFix };
  /*console.log('filter prev deleted...');
  console.log(filter);*/

  let entitiesIdsForDeleted = (
    await model.findAll({
      attributes: [primaryKey],
      raw: true,
      where: criteriaFilter,
    })
  ).map((entity) => entity[primaryKey]); /*map((entity) => entity[primaryKey])
    .filter((entityId) => entities.some((entityParam) => entityParam));*/ /*let entitiesIdsForDeleted = entities
    .filter(({ Identifier = false }) => !Identifier)
    .map((entity) => entity); //entity[primaryKey]);*/
  //console.log(entitiesIdsForDeleted);

  /*let entitiesForUpsert = entities.filter(
    (entity) => !entitiesIdsForDeleted.includes(entity[primaryKey])
  );*/

  //console.log(entities);

  // remove all non-existents data
  await bulkDelete(model, entitiesIdsForDeleted);

  // update or insert new data
  await bulkUpsert(model, entities);
};

module.exports = {
  paramsDeleted,
  paramsUpdated,

  upsert,
  bulkUpsert,
  bulkDelete,
  bulkRefresh,

  excludeTimestamps: () => {
    return { exclude: ['ActionStatus', 'UpdatedIn', 'DeletedIn'] };
  },

  paramsForVerifyBeforeCreate: (object) => {
    // x = {a: 1, b:2} => arr =  [{a:1}, {b:2}]
    let paramsVerify = [];
    Object.entries(object).forEach((entry) => {
      let currentObj = {};
      currentObj[entry[0]] = entry[1];
      paramsVerify.push(currentObj);
      //console.log(paramsVerify);
    });
    return paramsVerify;
  },
  /**
   *
   * @param {*} paginateParams.pageNumber : its the current index of the pagination
   * @param {*} paginateParams.size: how many elements each page should have
   *
   * @returns
   */
  parameterizePagination: ({ pageNumber, size }) => {
    var resultPaginate = { offset: 0 };
    if (pageNumber && size) {
      // verificar existencia de parametros
      //let totalElements = dataQuery.length;
      //let totalPages = Math.round(totalElements / size);
      resultPaginate = { offset: (pageNumber - 1) * size, limit: parseInt(size) };
    }
    //console.log(resultPaginate);
    return resultPaginate;
  },

  finalQuery: ({ pageNumber, size }, data) => {
    let { rows, count } = data;
    let totalElements = count;
    let totalPages = size ? Math.ceil(totalElements / size) : 0;
    return {
      size: parseInt(size),
      totalElements,
      totalPages,
      pageNumber: parseInt(pageNumber),
      rows,
    };
  },

  UserType: {
    USER_POLLESTER: 1,
    USER_SUPERVISOR: 2,
    USER_EMPLOYEE: 3,
  },
  TypeNannyAvailable: {
    NANNY_PROGRAMED: 1,
    NANNY_EMERGENCY: 2,
    NANNY_MONTHLY: 3,
  },
};
