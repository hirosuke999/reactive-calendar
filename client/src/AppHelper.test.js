import sut from './AppHelper';

/* global fit, xit, expect */

const MARCH = 2;
const APRIL = 3;
const MAY   = 4;

it('getLastDayOfは月の最終日を返す', () => {
  // SetUp
  const LAST_DAY_OF_APRIL = 30;
  // Exercise
  const lastDay = sut.getLastDayOf(2017, APRIL);
  // Verify
  expect(LAST_DAY_OF_APRIL).toBe(lastDay.getDate());
});

it('getCalendarRangeは指定個数の空オブジェクトを返す', () => {
  // Exercise
  const range = sut.getCalendarRange(10);
  // Verify
  expect(range[0]).toEqual({});
  expect(range.length).toBe(10);
});

it('getCalendarDatesInは指定月の日数分のオブジェクトを返す', () => {
  // Exercise
  const dates = sut.getCalendarDatesIn(2017, APRIL);
  // Verify
  expect(dates.length).toBe(30);
});

it('getFragmentDaysInLastMonthは指定月の前月の断片を取得する', () => {
  // Exercise
  const dates = sut.getFragmentDaysInLastMonth(2017, APRIL);
  // Verify
  expect(dates.length).toBe(6);
  expect(dates[0].month).toBe(MARCH);
  expect(dates[0].date).toBe(26);
});

it('getFragmentDaysInNextMonthは指定月の翌月の断片を取得する', () => {
  // Exercise
  const dates = sut.getFragmentDaysInNextMonth(2017, APRIL);
  // Verify
  expect(dates.length).toBe(6);
  expect(dates[0].month).toBe(MAY);
  expect(dates[dates.length - 1].date).toBe(6);
});

it('getCalendarDatesForは指定月のカレンダーデータを返す', () => {
  // Exercise
  const dates = sut.getCalendarDatesFor(2017, APRIL);
  // Verify
  expect(dates.length).toBe(42);
});

it('groupByWeekは日付を週単位でグルーピングする', () => {
  // SetUp
  const dates = sut.getCalendarDatesFor(2017, APRIL);
  // Exercise
  const weeks = sut.groupByWeek(dates);
  // Verify
  expect(weeks.length).toBe(6);
});

  // SetUp
  // Exercise
  // Verify
