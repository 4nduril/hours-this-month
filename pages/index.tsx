import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { ExampleSection } from '../src/components/ExampleSection'
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
            {hoursThisMonth} full hours have gone by this month.
          </TimeDisplay>
        ) : (
          <TimeDisplay>Calculating…</TimeDisplay>
        )}
        <div className="mt-10 flex justify-center px-4">
          <UnitSinceForm />
        </div>
        <div className="mt-32 px-4">
          <ExampleSection />
        </div>
      </div>
    </Layout>
  )
}

export default Home
