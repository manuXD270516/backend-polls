const { DateTime, Interval } = require("luxon");

const DATES_EQUALS = 1;
const DATE_FIRST_HIGHER = 2;
const DATE_FIRS_LESS = 3;

module.exports = {
  /**
   * @author Pablo Tardio
   * @createdAt 04/07/2022
   * function to have an array of days with resetted time to the 00:00 of a interval
   * @param {Interval} interval 
   * @returns {DateTime[]} array of days of the interval
   */
  getDaysFromInterval:(interval)=>{
    days=[]
    let currentDay = interval.start.startOf("day");
    while (currentDay < interval.end) {
      days.push(currentDay)
      currentDay = currentDay.plus({ days: 1 });
    }
    return days
  },
  /**
   * @author Pablo Tardio
   * @createdAt 04/07/2022
   * Function to create a datetime of a time with hour and minutes with the date, this because
   * the ZONE of the ISO strings inputs should be the same
   * @param {DateTime} date  a DateTime that only contains a Date (Time section will be overwritten)
   * @param {DateTime} time  a DateTime that only contains a Time (date section will be ignored)
   * @returns {DateTime}
   */
   mergeDateWithTime:(date,time)=>{
  
     date=date.set({hour:time.hour,minute:time.minute})
    return date
  },
  /**
   * compareParam:
   * 0: fechas iguales,
   * 1: fecha A mayor que fecha B
   * 2: fecha A menor que fecha B
   */
  compareDates: (dateA, dateB, compareParam = DATES_EQUALS) => {
    dateA = new Date(dateA).getTime();
    dateB = new Date(dateB).getTime();
    if (compareParam == DATES_EQUALS) {
      return dateA == dateB;
    } else if (compareParam == DATE_FIRST_HIGHER) {
      return dateA > dateB;
    } else {
      return dateA < dateB;
    }
  },
  CodeCompareTo: {
    DATES_EQUALS,
    DATE_FIRST_HIGHER,
    DATE_FIRS_LESS,
  },
};
