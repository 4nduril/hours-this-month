import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import {
  getUnitSinceStart,
  allowedUnit,
  allowedUnits,
  allowedStarts,
} from './time-functions'

const isValidParameter = (p: string | string[] | undefined) => {
  return !Array.isArray(p)
}

const isValidDate = (s: string) => {
  return dayjs(s).isValid()
}

const isTime = (s: string) => {
  return /^\d\d:\d\d(:\d\d)?$/.test(s)
}

export const useUnitCount = () => {
  const router = useRouter()
  const unit = router.query.unit
  const start = router.query.start
  const [unitCount, setUnitCount] = useState<number>()
  useEffect(() => {
    if (!isValidParameter(unit) || !isValidParameter(start)) {
      router.push('/hours/since/thisMonth')
      return
    }
    if (
      typeof unit === 'string' &&
      typeof start === 'string' &&
      isTime(start)
    ) {
      router.push(
        `/${unit}/since/${dayjs()
          .startOf('day')
          .hour(Number(start.slice(0, 2)))
          .minute(Number(start.slice(4, 6)))
          .format('YYYY-MM-DDTHH:mm:ss')}`
      )
    }
    // @ts-expect-error Array.prototype.includes is safe for any string
    if (typeof unit === 'string' && !allowedUnits.includes(unit)) {
      router.push('/hours/since/thisMonth')
      return
    }
    if (
      typeof start === 'string' &&
      // @ts-expect-error Array.prototype.includes is safe for any string
      !allowedStarts.includes(start) &&
      !isValidDate(start)
    ) {
      router.push('/hours/since/thisMonth')
      return
    }
  }, [router, unit, start])
  useEffect(() => {
    if (
      typeof unit === 'string' &&
      // @ts-expect-error Array.prototype.includes is safe for any string
      allowedUnits.includes(unit) &&
      typeof start === 'string' &&
      // @ts-expect-error Array.prototype.includes is safe for any string
      (allowedStarts.includes(start) || isValidDate(start))
    ) {
      // Call once on every change.
      setUnitCount(getUnitSinceStart(unit as allowedUnit, start))
      const setTime = () => {
        setUnitCount(getUnitSinceStart(unit as allowedUnit, start))
      }
      // Then call every second.
      const intervalId = setInterval(setTime, 1000)
      return () => clearInterval(intervalId)
    }
  }, [unit, start])
  return { unitCount, unit, start: Array.isArray(start) ? start[0] : start }
}
