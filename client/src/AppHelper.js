import Koyomi from 'koyomi';

class AppHelper {
  
  static get SATURDAY() {
    return 0;
  }
  
  static get SUNDAY() {
    return 6;
  }
  
  static getCalendarDatesFor(year, month) {
    const fragmentDaysInLastMonth = this.getFragmentDaysInLastMonth(year, month);
    const daysInCurrentMonth = this.getCalendarDatesIn(year, month);
    const fragmentDaysInNextMonth = this.getFragmentDaysInNextMonth(year, month);
    
    return fragmentDaysInLastMonth
                        .concat(daysInCurrentMonth)
                        .concat(fragmentDaysInNextMonth);
  }
  
  static getFragmentDaysInNextMonth(year, month) {
    const date = new Date(year, month + 1);
    const calendar = this.getCalendarRange(7 - date.getDay());
    
    return calendar.map(() => {
      const calDate = this.getCalendarDate(date);
      date.setDate(date.getDate() + 1);
      return calDate;
    });    
  }
  
  static getFragmentDaysInLastMonth(year, month) {
    const date = this.getLastDayOf(year, month - 1);
    const calendar = this.getCalendarRange(date.getDay() + 1);
    
    return calendar.map(() => {
      const calDate = this.getCalendarDate(date);
      date.setDate(date.getDate() - 1);
      return calDate;
    }).reverse();
  }
  
  static getCalendarDatesIn(year, month) {
    const date = new Date(year, month);
    const today = new Date();
    const lastDate = this.getLastDayOf(year, month);
    const range = lastDate.getDate();
    const calendar = this.getCalendarRange(range);
    
    return calendar.map(() => {
      const calDate = Object.assign({}, this.getCalendarDate(date), {
        current: this.isToday(date, today),
        inMonth: true,
      });
      
      date.setDate(date.getDate() + 1);
      
      return calDate;
    });
  }
  
  static getCalendarDate(date) {
    return {
        id: date.getTime(),
        year: date.getFullYear(),
        month: date.getMonth(),
        date: date.getDate(),
        day: date.getDay(),
        time: date.getTime(),
        current: false,
        inMonth: false,
        holiday: Koyomi.getHolidayName(date) || null
    };
  }
  
  static isToday(date, today) {
    if (date.getFullYear() !== today.getFullYear()) {
      return false;
    }
    if (date.getMonth() !== today.getMonth()) {
      return false;
    }
    if (date.getDate() !== today.getDate()) {
      return false;
    }
    return true;
  }
  
  static getLastDayOf(year, month) {
    var d = new Date(year, month + 1);
    d.setDate(d.getDate() - 1);
    return d;
  }
  
  static getCalendarRange(nums) {
    return Array(nums).fill({});
  }
  
  static groupByWeek(dates) {
    const weeks = [];
    while (dates.length > 0) {
      weeks.push(dates.splice(0, 7));
    }
    return weeks;
  }
}

export default AppHelper;