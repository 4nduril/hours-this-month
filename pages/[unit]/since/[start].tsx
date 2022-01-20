import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { FunctionComponent, useEffect, useState } from 'react'
import {
  allowedStarts,
  allowedUnit,
  allowedUnits,
  getUnitSinceStart,
} from '../../../src/time-functions'

const UnitSinceStart: NextPage = () => {
  const router = useRouter()
  const unit = router.query.unit
  const start = router.query.start
  const [unitCount, setUnitCount] = useState<number>()
  useEffect(() => {
    // @ts-expect-error Array.prototype.includes is safe for any string
    if (typeof unit === 'string' && !allowedUnits.includes(unit)) {
      router.push('/hours/since/thisMonth')
      return
    }
    // @ts-expect-error Array.prototype.includes is safe for any string
    if (typeof start === 'string' && !allowedStarts.includes(start)) {
      router.push('/hours/since/thisMonth')
      return
    }
  })
  useEffect(() => {
    if (
      typeof unit === 'string' &&
      // @ts-expect-error Array.prototype.includes is safe for any string
      allowedUnits.includes(unit) &&
      typeof start === 'string' &&
      // @ts-expect-error Array.prototype.includes is safe for any string
      allowedStarts.includes(start)
    ) {
      const setTime = () => {
        setUnitCount(getUnitSinceStart(unit as allowedUnit, start))
      }
      const intervalId = setInterval(setTime, 1000)
      return () => clearInterval(intervalId)
    }
  }, [unit, start])
  const startString =
    typeof start === 'string' &&
    // @ts-expect-error Array.prototype.includes is safe for any string
    allowedStarts.filter(s => s !== 'today').includes(start)
      ? start.slice(4).toLowerCase()
      : start
  return (
    <>
      {typeof unitCount !== 'undefined' && typeof unit === 'string' ? (
        start === 'today' ? (
          <Today count={unitCount} unit={unit} />
        ) : (
          <span>
            This {startString} had already {unitCount} full {unit}.
          </span>
        )
      ) : (
        <span>Calculating…</span>
      )}
    </>
  )
}

const Today: FunctionComponent<{ unit: string; count: number }> = ({
  unit,
  count,
}) => (
  <span>
    Today had already {count} {unit}.
  </span>
)

export default UnitSinceStart
