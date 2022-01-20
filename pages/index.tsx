import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { getUnitSinceStart } from '../src/time-functions'

const Home: NextPage = () => {
  const [hoursThisMonth, setHoursThisMonth] = useState<number>()
  useEffect(() => {
    setHoursThisMonth(getUnitSinceStart('hours', 'thisMonth'))
    const setTime = () => {
      setHoursThisMonth(getUnitSinceStart('hours', 'thisMonth'))
    }
    const intervalId = setInterval(setTime, 1000)
    return () => clearInterval(intervalId)
  }, [])
  return typeof hoursThisMonth === 'number' && !Number.isNaN(hoursThisMonth) ? (
    <span>This month had already {hoursThisMonth} hours.</span>
  ) : (
    <span>Calculating…</span>
  )
}

export default Home
