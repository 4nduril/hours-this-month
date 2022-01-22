import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { Layout } from '../src/components/Layout'
import { TimeDisplay } from '../src/components/TimeDisplay'
import { UnitSinceForm } from '../src/components/UnitSinceForm'
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
  return (
    <Layout>
      <div className="mt-32">
        {typeof hoursThisMonth === 'number' && !Number.isNaN(hoursThisMonth) ? (
          <TimeDisplay>
            This month had already {hoursThisMonth} full hours.
          </TimeDisplay>
        ) : (
          <TimeDisplay>Calculating…</TimeDisplay>
        )}
        <UnitSinceForm />
      </div>
    </Layout>
  )
}

export default Home
