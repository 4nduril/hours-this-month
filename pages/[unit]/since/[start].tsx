import dayjs from 'dayjs'
import type { NextPage } from 'next'
import { FunctionComponent } from 'react'
import { allowedStarts } from '../../../src/time-functions'
import { useUnitCount } from '../../../src/useUnitCount'

const getStartType = (s?: string) => {
  if (!s) {
    return undefined
  }
  // @ts-expect-error Array.prototype.includes is safe for any string
  if (allowedStarts.includes(s)) {
    return 'default'
  }
  if (s === 'today') {
    return 'today'
  }
  return 'date'
}

const UnitSinceStart: NextPage = () => {
  const { unitCount, unit, start } = useUnitCount()
  const startType = getStartType(start)

  if (
    !startType ||
    typeof unitCount === 'undefined' ||
    typeof unit !== 'string' ||
    typeof start !== 'string'
  ) {
    return <Calculating />
  }

  if (startType === 'today') {
    return <Today unit={unit} count={unitCount} />
  }

  if (startType === 'date') {
    return <SinceDate unit={unit} count={unitCount} date={start} />
  }

  return (
    <span>
      This {start.slice(4).toLowerCase()} had already {unitCount} full {unit}.
    </span>
  )
}

const Calculating: FunctionComponent = () => <span>Calculating…</span>

const Today: FunctionComponent<{ unit: string; count: number }> = ({
  unit,
  count,
}) => (
  <span>
    Today had already {count} full {unit}.
  </span>
)

const SinceDate: FunctionComponent<{
  unit: string
  count: number
  date: string
}> = ({ unit, count, date }) => (
  <span>
    There were already {count} full {unit} since{' '}
    {dayjs(date).format('YYYY-MM-DD[, ]HH:mm:ss')}
  </span>
)

export default UnitSinceStart
