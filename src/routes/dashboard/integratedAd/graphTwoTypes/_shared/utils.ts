import dayjs from 'dayjs';
import { IPeriod } from 'types/period';
import { IDay, IDayNumberType } from 'types/integratedAd';
import { PRIMARY_OPTIONS, PERIOD_OPTIONS } from './constants';

type PrimaryOptions = typeof PRIMARY_OPTIONS[number];
type PeriodOptions = typeof PERIOD_OPTIONS[number];
type Btn = KeyOfIDayNumberType | KeyOfIDayNumberType[];

type KeyOfIDayNumberType = keyof IDayNumberType;

interface IFormatedData {
  x: string;
  y: number;
}

export const filterGraphOpt = (otherOpt: PrimaryOptions) => PRIMARY_OPTIONS.filter((option) => option !== otherOpt);

export const filterPeriodOpt = (preiod: IPeriod) => {
  const { startDate, endDate } = preiod;
  const start = dayjs(startDate);
  const periodDiff = start.diff(endDate, 'd');
  return Math.abs(periodDiff) > 6 ? ['일간', '주간'] : ['일간'];
};

const getWeekNumber = (cur: string) => {
  const currentDate = dayjs(cur).date();
  const weekDay = dayjs(cur).startOf('month').day();
  const weekNum = Math.trunc((weekDay - 1 + currentDate) / 7) + 1;
  return `${dayjs(cur).month() + 1}월 ${weekNum}주`;
};

const convertWeeklyData = (integratedAdInfo: IDay[], btnOption: Btn) => {
  let arrIndex = 0;
  let daysInWeek = 0;
  return integratedAdInfo?.reduce(
    (acc, cur, i, src) => {
      const accX = getWeekNumber(acc[arrIndex].x);
      const curX = getWeekNumber(cur.date);
      const btnValue = Array.isArray(btnOption) ? (cur[btnOption[0]] * cur[btnOption[1]]) / 100 : cur[btnOption];

      if (i === 0) return acc;

      daysInWeek += 1;

      if (accX === curX) {
        acc[arrIndex] =
          i === src.length - 1
            ? { x: accX, y: Math.round((acc[arrIndex].y + btnValue) / (daysInWeek += 1)) }
            : { x: cur.date, y: acc[arrIndex].y + btnValue };
        return acc;
      }

      acc[arrIndex] = { x: accX, y: Math.round(acc[arrIndex].y / daysInWeek) };

      daysInWeek = 0;
      arrIndex += 1;
      acc[arrIndex] = { x: cur.date, y: btnValue };
      return acc;
    },
    [
      {
        x: integratedAdInfo[0].date,
        y: Math.round(
          Array.isArray(btnOption)
            ? (integratedAdInfo[0][btnOption[0]] + integratedAdInfo[0][btnOption[1]]) / 100
            : integratedAdInfo[0][btnOption]
        ),
      },
    ]
  );
};

const convertDailyData = (integratedAdInfo: IDay[], btn: Btn) =>
  integratedAdInfo?.map((day) => {
    return { x: day.date, y: Math.round(Array.isArray(btn) ? (day[btn[0]] * day[btn[1]]) / 100 : day[btn]) };
  });

const formatReturnData = (unitVal: string, integratedAdInfo: IDay[], btn: Btn, periodOption: PeriodOptions) => {
  const formatedData =
    periodOption === '일간' ? convertDailyData(integratedAdInfo, btn) : convertWeeklyData(integratedAdInfo, btn);
  return {
    unit: unitVal,
    formatedData,
    maxValue: formatedData && Math.max(...formatedData.map((obj: IFormatedData) => obj.y)),
  };
};

export const convertData = (integratedAdInfo: IDay[], btnOption: PrimaryOptions, periodOption: PeriodOptions) => {
  if (btnOption === 'ROAS') return formatReturnData('%', integratedAdInfo, 'roas', periodOption);
  if (btnOption === '광고비') return formatReturnData('원', integratedAdInfo, 'cost', periodOption);
  if (btnOption === '클릭 수') return formatReturnData('회', integratedAdInfo, 'click', periodOption);
  if (btnOption === '노출 수') return formatReturnData('회', integratedAdInfo, 'imp', periodOption);
  if (btnOption === '매출') return formatReturnData('원', integratedAdInfo, 'convValue', periodOption);
  if (btnOption === '전환 수') return formatReturnData('회', integratedAdInfo, ['cvr', 'click'], periodOption);
  return undefined;
};

export const convertNumToUnit = (num: number) => {
  if (num < 10000) {
    return Math.round(num)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  const transUnit = [
    { value: 1e12, symbol: '조' },
    { value: 1e11, symbol: '천억' },
    { value: 1e10, symbol: '백억' },
    { value: 1e9, symbol: '십억' },
    { value: 1e8, symbol: '억' },
    { value: 1e7, symbol: '천만' },
    { value: 1e6, symbol: '백만' },
    { value: 1e5, symbol: '십만' },
    { value: 1e4, symbol: '만' },
  ];
  let i;
  for (i = 0; i < transUnit.length; i += 1) {
    if (num >= transUnit[i].value) {
      return (num / transUnit[i].value).toFixed(1).replace(/\.?0+$/, '') + transUnit[i].symbol;
    }
  }
  return num;
};
