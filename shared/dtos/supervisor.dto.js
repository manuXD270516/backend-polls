const { morphism } = require('morphism');

const mapperSupervisor = (supervisor) => {
  const supervisorSchema = {
    SupervisorId: 'SupervisorId',
    CI: 'CI',
    Names: 'Names',
    Lastnames: 'Lastnames',
    Email: 'Email',
    Phone: 'Phone',
    Gender: 'Gender',
    Address: 'Address',
    CreatedIn: 'CreatedIn',
  };

  return morphism(supervisorSchema, supervisor);
};

module.exports = {
  mapperSupervisor,
};
