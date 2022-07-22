const moment = require('moment');
const { asyncForEach } = require('../../shared/utils/arrays');
const { TypeNannyAvailable } = require('../../shared/utils/database-sequelize');
const {DateTime,Interval} =require('luxon')
const {
  ServiceTurnRepository,
  NannyCostHourlyRepository,
  AgreedCostsRepository,
  ServiceProposalMonthlyRepository,
} = require('../models/repositories');
const { getFixedHourToADay, getDaysFromInterval, mergeDateWithTime } = require('../../shared/utils/datetime');
/**
 * The minimun hours that a service MUST have
 */
const MINIMUN_HOURS_SERVICES = 3;
/**
 * The Zone in IANA Standar where all the dates are supossed to have now
 */
const INPUT_TIME_IANA_ZONE="America/La_Paz"
const getDateWithoutTimeZone = (date) => {
  return moment(date).utcOffset('+00:00');
};
/**
 * 
 * @param {DateTime} time time to convert in minutes
 */
const hoursToMinutesLuxon=(time)=>{
  time.minut
}
const hourToMinutesMoment = (currentHour, timeZone = false) => {
  if (timeZone) {
    currentHour = moment(currentHour).utcOffset('-00:00');
    //console.log(currentHour);
  } else {
    currentHour = moment(currentHour); //.utcOffset("+04:00");
  }

  const minutes = moment.duration(currentHour.format('HH:mm')).asMinutes();
  //console.log(minutes);
  return parseInt(minutes);
  //console.log(minutes);
};

const countMonthsInRangeDate = (initDate, endDate) => {
  return moment(endDate).diff(initDate, 'months');
};

const FRACTION_TIME_HOUR = 0.25,
  FRACTION_TIME_MININUTE = 15,
  MILISECONDS = 1000,
  TOTAL_MINUTES_PER_DAY = 1440; // dynamic
const calculateCostOfServiceNannys=async({
  ServiceProposalId = false,
  ExectudedStartTime = false,
  ExecutedEndTime = false,
  AgreedsCostsIds = [],

  ServiceProposalMonthlyId = false,
  ServiceStartDate = false,
  ServiceEndDate = false,


  TypeNannyId,
})=>{
  //Parsear los tiempos a utc desde la zona correspondiente
  mapCostCalculationDetail(getCostCalculationDetail())
}

const getCostCalculationDetail=async()=>{
  
}

/**
 * Function to create datetimes based in the time range begin and end on inputs
 * that adds a day if some of the ranges arrives in another day
 * example time begins 14:30 and ends 03:00
 * because the end is 3:00, it means is other day, so a day is added to that time
 * @param {string} BeginTime Time where the time Range Begins in Hours and minutes HH:mm (i.e. 09:34)
 * @param {string} EndTime  Time where the time Range Ends in Hours and minutes HH:mm (i.e. 12:34)
 * @param { string | luxon.Zone | undefined} zone zone of the time inputs
 * @returns {{BeginTime:DateTime,EndTime:DateTime}} the time range splited in datetimes 
 */
const getFormattedTimeRangeWithSeparateDays=(BeginTime,EndTime,zone)=>
{
  // 1)Make an ISO time from the hours 
    // The zone of the time that is arriving is from Bolivia Timezone (For now)
     BeginTime=DateTime.fromFormat(BeginTime, 'HH:mm',{setZone:zone});
     EndTime=DateTime.fromFormat(EndTime, 'HH:mm',{setZone:zone});
    // 2)Parse the time adding a day in the object if is the range of time includes the next day, 
    //that means, the end is less than the begin ,cuz the day of end should be other
    EndTime=addExtraDayInCircularRange(EndTime, BeginTime);
    return {BeginTime,EndTime}
}
/**
 * Function to calculate a time range returning
 * that adds a day if some of the ranges arrives in another day
 * example time begins 14:30 and ends 03:00
 * because the end is 3:00, it means is other day, so a day is added to that time
 * @param {Date} BeginTime Time where the time Range Begins in Date
 * @param {Date} EndTime  Time where the time Range Ends in Date
 * @param { string | luxon.Zone | undefined} zone zone of the time inputs
 * @returns {{BeginTime:DateTime,EndTime:DateTime}} the time range with their respective parsing
 */
const getFormattedTimeRangeWithSeparateDaysfromISO=(BeginTime,EndTime,zone)=>
{ 
  BeginTime
  // 1)Make an ISO time from the hours 
    // The zone of the time that is arriving is from Bolivia Timezone (For now)
     BeginTime=DateTime.fromFormat(`${BeginTime.getUTCHours()}`,'H',{setZone:zone, });
     EndTime=DateTime.fromFormat(`${EndTime.getUTCHours()}`,'H',{setZone:zone, });
    // 2)Parse the time adding a day in the object if is the range of time includes the next day, 
    //that means, the end is less than the begin ,cuz the day of end should be other
   
    EndTime=addExtraDayInCircularRange(EndTime, BeginTime);
    return {BeginTime,EndTime}
}
/**
 * this function creates intervals inside a turn, this is because all the turns are located in the same day
 * and this case will work in the next scenario:
 * i.e: start: 21:00 , end: 02:00  the range of dates looks ok, but if the hours are in the same day
 * it will cause an invalid interval.
 * so I do a "split" of two subintervals in that case, like  00:00 to 02:00 and 21:00 to 23:59
 * if the interval is valid, an array with one element is returned
 * @param {DateTime} start start time of the turn
 * @param {DateTime} end  end time of the turn
 * @returns {Interval[]}the array of intervals
 */
const getIntervalsForTurn=(start,end)=>{
  let rangeOfTime=[]
  if (end<start){
    rangeOfTime= [
      {start:end.startOf('day'),
      end},
      {
        start,
        end:start.endOf('day')
      }
    ]
  }else{
    rangeOfTime=[ {
      start,
      end
    }]
  }
  return rangeOfTime.map((currentRange)=>Interval.fromDateTimes(
    currentRange.start,
    currentRange.end
  ))
}
/**
 * 
 * @param {{start:DateTime,end:DateTime}} dateRange an object containing two strings in ISO format of the begin and end of
 * the service and in UTC 
 * @param {{name:string,
 * startTime:DateTime,
 * endTime:DateTime,
 * costPerHour:number,
 * currency:number,
 * currencyIdc:number}[]} turns an array containing the turns that will be applied to each dateRange
 * @param { string | luxon.Zone | undefined} responseZone The format of the zone Response (Default 'utc')
 * @returns the detail of the service
 */
const calculateCostOfRangesUsingTurns = (dateRange, turns, responseZone) => {

  let costsDetails=[]
	let totalCost = 0.0;
	// I should Iterate the number of days of my day Range
	//Create a interval between Executed Times
	const executedServiceInterval = Interval.fromDateTimes(
		dateRange.start,
		dateRange.end
	);
	for (const resetDay of getDaysFromInterval(executedServiceInterval)) {
		// For each day in the interval I should Compare Each Turn
		for (const turn of turns) {
			// Each Turn Time is supposed to be in the current Day so the order doesn't matter
			//i.e.: maybe the night turn is first or the morning turn in 03:00 to 12:00 range
			turn.startTime = mergeDateWithTime(resetDay, turn.startTime);
			turn.endTime = mergeDateWithTime(resetDay, turn.endTime);
			//Create a interval between Turns
			const turnIntervals = getIntervalsForTurn(turn.startTime,turn.endTime)
      
			for (const turnInterval of turnIntervals) {
        //  Intersect the turns
			const intersectedTurnToPay =
				executedServiceInterval.intersection(turnInterval);
			//If there is an interval, The Costs are added to the total
			if (intersectedTurnToPay != null) {
				// Get the intersection
				let countedHours = intersectedTurnToPay.toDuration("hours").hours;
				
				let currentCost = countedHours * turn.costPerHour;

				let costDetailItem = {
					Turn:turn.name,
					StartTime: intersectedTurnToPay.start.toFormat("HH:mm"),
					EndTime: intersectedTurnToPay.end.toFormat("HH:mm"),
					HoursDuration: intersectedTurnToPay
						.toDuration()
						.toFormat("hh:mm:ss"), //secondsToHourFormat(countedMinutes * 60),
          CostPerHour: turn.costPerHour,
					TotalCost: currentCost,
					Currency:turn.currency,
					CurrencyIdc:turn.currencyIdc,
				};

				costsDetails.push(costDetailItem);
				totalCost += currentCost;
			}
      }
		}
	}
	return {costsDetails,totalCost};
};
/**
 * Map from the AgreedCostModel To Turns
 * @param {Array} AgreedCosts the array of agreedCosts 
 * @returns {{name:string,
 * beginTime:string,
 * endTime:string,
 * costPerHour:number,
 * currency:number,
 * currencyIdc:number}[]} turns
 */
const mapTurns = (AgreedCosts) => {
	return AgreedCosts.map((AnAgreedCost) => {
		let {
			ExecutedCost,
			AgreedCostCurrency: {
				Abbreviation: Currency,
				ClassifierId: CurrencyIdc,
			},
			ServiceTurn: { StartTime, EndTime, Turn },
		} = AnAgreedCost;
    
		return {
			name: Turn,
      //We put the correct zone because it is set with utc but is not
			startTime: DateTime.fromISO(StartTime.toISOString(),{setZone:INPUT_TIME_IANA_ZONE}),
			endTime: DateTime.fromISO(EndTime.toISOString(),{setZone:INPUT_TIME_IANA_ZONE}),
			costPerHour: ExecutedCost,
      currency:Currency,
      currencyIdc:CurrencyIdc
		};
	});
};
/**
 * 
 * @param {DateTime} start 
 * @param {DateTime} end 
 * @returns {start:DateTime,end:DateTime}
 */
const mapDateRange=(start,end)=>{
  return {start,end}
}
const calcuteCostOfServiceNannys = async ({

  ServiceProposalId = false,
  ExectudedStartTime:ExecutedStartTime = false,
  ExecutedEndTime = false,
  AgreedsCostsIds = [],
  ServiceProposalMonthlyId = false,
  ServiceStartDate = false,
  ServiceEndDate = false,

  //NannyCostHourlyId,
  //NannyId,
  TypeNannyId,
  //AssignmentNannyId,
}) => {
  if (TypeNannyId != TypeNannyAvailable.NANNY_MONTHLY) {
    //Get the StartTime and end Time in SeparateDays
   let { BeginTime: ExecutedStartDateTime, EndTime: ExecutedEndDateTime } =
		getFormattedTimeRangeWithSeparateDays(
			ExecutedStartTime,
			ExecutedEndTime,
			INPUT_TIME_IANA_ZONE
		);
     
    //Add minimun Hour services to the Duration if it is not the minimun
    let executedTimeDuration = ExecutedEndDateTime.diff(ExecutedStartDateTime,'hours');
    if (executedTimeDuration.hours< MINIMUN_HOURS_SERVICES) {
      ExecutedEndDateTime=ExecutedStartDateTime.plus({hours:MINIMUN_HOURS_SERVICES})
    }

    console.log({ExecutedStartDateTime:ExecutedStartDateTime.toISO()});
    console.log({ExecutedEndDateTime:ExecutedEndDateTime.toISO()});
    


    /**
     * The turns that this service have
     */
    const AgreedCostsAvailable= await AgreedCostsRepository.getAgreedsCostsByIds(AgreedsCostsIds)
    // I map turns and the range to send them to the cost calculator of turns and Date Range
    const mappedTurns= mapTurns(AgreedCostsAvailable)
    const mappedDateRange= mapDateRange(ExecutedStartDateTime,ExecutedEndDateTime)
    //  Calculate the costs of Date and turns
    const {costsDetails,totalCost}=calculateCostOfRangesUsingTurns(mappedDateRange,mappedTurns)
    let currencyGlobal= mappedTurns[0].currency
    let currencyIdcGlobal=  mappedTurns[0].currencyIdc;
    console.log('........REVISION DEL COST DETAILS........');
    console.log({costsDetails,totalCost});
    return {
			costsDetails,
			totalCost,
			currency: currencyGlobal,
			currencyIdc: currencyIdcGlobal,
		};
  } else {
    let {
      ExecutedCostMonthly,
      ServiceMonthlyCurrency: { Abbreviation: currency, ClassifierId: currencyIdc },
    } = await ServiceProposalMonthlyRepository.getServiceMonthlyById(ServiceProposalMonthlyId);

    //let x = await ServiceProposalMonthlyRepository.getServiceMonthlyById(ServiceProposalMonthlyId);
    //console.log(x);
    /* let {
      ExecutedCostMonthly,
      ServiceMonthlyCurrency: { Abbreviation: currency, ClassifierId: currencyIdc },
    } = x; */

    return {
      totalCost: ExecutedCostMonthly * countMonthsInRangeDate(ServiceStartDate, ServiceEndDate),
      currency,
      currencyIdc,
    };
    
  }
};

const secondsToHourFormat = (seconds) => {
  return moment.utc(seconds * MILISECONDS).format('HH:mm:ss');
};

const convertHMS = (value) => {
  const sec = parseInt(value, 10); // convert value to number if it's string
  let hours = Math.floor(sec / 3600); // get hours
  let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
  let seconds = sec - hours * 3600 - minutes * 60; //  get seconds
  // add 0 if value < 10; Example: 2 => 02
  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  return hours + ':' + minutes + ':' + seconds; // Return is HH : MM : SS
};

const calculatePriceForService = async (NannyCostHourlyId, ServiceProposalId) => {
  let {
    ExecutedCost: executedCostPerHour,
    AgreedCostCurrency: { Abbreviation: currency, ClassifierId: currencyIdc },
  } = await AgreedCostsRepository.getAgreedCostsByTurnAndService(
    NannyCostHourlyId,
    ServiceProposalId
  );

  return { cost: (FRACTION_TIME_HOUR * executedCostPerHour) / 1, currency, currencyIdc }; // 1 hour
};

const calcultePriceForTurn = async (ServiceTurnId, AssignmentNannyId) => {
  //let pricePerHour = 10;
  let {
    ServiceCost: pricePerHour,
    AgreedCostCurrency: { Abbreviation, currency, ClassifierId: currencyIdc },
  } = await NannyCostHourlyRepository.getPriceForSercviceAndAssignmentNanny(
    ServiceTurnId,
    AssignmentNannyId
  );

  return { cost: (FRACTION_TIME_HOUR * pricePerHour) / 1, currency, currencyIdc }; // 1 hour
};

/*let v = { AssignmentNannyId: 4, x: 1 };
calcuteCostForService(v);

hourToMinutes("2021-05-14T18:34");*/
let value2 = {
  TypeNannyId: 1,
  NannyId: 4,
  AssignmentNannyId: 7,
  AgreedsCostsIds: [71, 72],
  //ExectudedStartTime: '2021-05-06T12:30',
  //ExecutedEndTime: '2021-05-06T19:30',

  /*ServiceProposalMonthlyId: 1,
    ServiceStartDate: '2020-07-27',
    ServiceEndDate: '2020-11-27',*/

  ExectudedStartTime: '10:30',
  ExecutedEndTime: '12:30',
};

let value = {
  TypeNannyId: 1,
  NannyId: 1,
  AssignmentNannyId: 3,
  AgreedsCostsIds: [29, 30],
  //ExectudedStartTime: '2021-05-06T12:30',
  //ExecutedEndTime: '2021-05-06T19:30',

  /*ServiceProposalMonthlyId: 1,
    ServiceStartDate: '2020-07-27',
    ServiceEndDate: '2020-11-27',*/

  ExectudedStartTime: '17:15',
  ExecutedEndTime: '19:15',
};

/*let x = calcuteCostOfServiceNannys(value2);
console.log(x);*/

module.exports = {
  hourToMinutes: hourToMinutesMoment,
  calcuteCostOfServiceNannys,
};
/**
 * 
 * @param {DateTime} EndTime 
 * @param {DateTime} BeginTime 
 * @returns {DateTime} EndTime with maybe one extra day
 */
const addExtraDayInCircularRange=(EndTime, BeginTime) =>{

  if (EndTime < BeginTime) {
    EndTime=EndTime.plus({ days: 1 });
  }
  return EndTime
}

