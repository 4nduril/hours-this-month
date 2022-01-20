import dayjs from 'dayjs'

type dateFunction = 'getSeconds' | 'getMinutes' | 'getHours'

export const getUnitThisMonthFromDate =
  ({
    dateFunction,
    fullDaysCalculation,
  }: {
    dateFunction: dateFunction
    fullDaysCalculation: (x: number) => number
  }) =>
  () => {
    const now = new Date()
    const fullDays = now.getDate() - 1
    const hoursToday = now[dateFunction]()
    return fullDaysCalculation(fullDays) + hoursToday
  }

export type allowedStart = typeof allowedStarts[number]
export type allowedUnit = typeof allowedUnits[number]

const startDates: Record<allowedStart, () => dayjs.Dayjs> = {
  thisMinute: () => dayjs().startOf('minute'),
  thisHour: () => dayjs().startOf('hour'),
  thisDay: () => dayjs().startOf('day'),
  today: () => dayjs().startOf('day'),
  thisWeek: () => dayjs().startOf('week'),
  thisMonth: () => dayjs().startOf('month'),
  thisYear: () => dayjs().startOf('year'),
}

export const getUnitSinceStart = (
  unit: typeof allowedUnits[number],
  start: string
) => {
  const now = dayjs()
  // @ts-expect-error Array.prototype.includes is safe for any string
  const startDate = allowedStarts.includes(start)
    ? startDates[start as allowedStart]()
    : dayjs(start)
  return now.diff(startDate, unit)
}

export const getSecondsThisMonth = getUnitThisMonthFromDate({
  dateFunction: 'getSeconds',
  fullDaysCalculation: days => days * 24 * 60 * 60,
})

export const getMinutesThisMonth = getUnitThisMonthFromDate({
  dateFunction: 'getMinutes',
  fullDaysCalculation: days => days * 24 * 60,
})

export const getHoursThisMonth = getUnitThisMonthFromDate({
  dateFunction: 'getHours',
  fullDaysCalculation: days => days * 24,
})

export const getDaysThisMonth = () => new Date().getDate() - 1

export const getWeeksThisMonth = () => Math.floor(getDaysThisMonth() / 7)

export const getMonthsThisMonth = () => 0

export const getYearsThisMonth = () => 0

export const getUnitThisMonth = (unit: typeof allowedUnits[number]) => {
  if (allowedUnits.includes(unit)) {
    switch (unit) {
      case 'seconds': {
        return getSecondsThisMonth()
      }
      case 'minutes': {
        return getMinutesThisMonth()
      }
      case 'hours': {
        return getHoursThisMonth()
      }
      case 'days': {
        return getDaysThisMonth()
      }
      case 'weeks': {
        return getWeeksThisMonth()
      }
      case 'months': {
        return getMonthsThisMonth()
      }
      case 'years': {
        return getYearsThisMonth()
      }
    }
  }
}

export const allowedUnits = [
  'seconds',
  'minutes',
  'hours',
  'days',
  'weeks',
  'months',
  'years',
] as const

export const allowedStarts = [
  'thisMinute',
  'thisHour',
  'today',
  'thisDay',
  'thisWeek',
  'thisMonth',
  'thisYear',
] as const
