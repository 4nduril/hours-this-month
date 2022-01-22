import dayjs from 'dayjs'
import type { NextPage } from 'next'
import { FunctionComponent } from 'react'
import { Layout } from '../../../src/components/Layout'
import { TimeDisplay } from '../../../src/components/TimeDisplay'
import { UnitSinceForm } from '../../../src/components/UnitSinceForm'
import { allowedStarts } from '../../../src/time-functions'
import { useUnitCount } from '../../../src/useUnitCount'

const getStartType = (s?: string) => {
  if (!s) {
    return undefined
  }
  // @ts-expect-error Array.prototype.includes is safe for any string
  if (allowedStarts.filter(s => s !== 'today').includes(s)) {
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
    return (
      <Page>
        <Calculating />
      </Page>
    )
  }

  if (startType === 'today') {
    return (
      <Page>
        <Today unit={unit} count={unitCount} />
      </Page>
    )
  }

  if (startType === 'date') {
    return (
      <Page>
        <SinceDate unit={unit} count={unitCount} date={start} />
      </Page>
    )
  }

  return (
    <Page>
      <TimeDisplay>
        {unitCount} full {unit} have gone by this {start.slice(4).toLowerCase()}
        .
      </TimeDisplay>
    </Page>
  )
}

const Page: FunctionComponent = ({ children }) => (
  <Layout>
    <div className="mt-32">{children}</div>
    <div className="mt-10 flex justify-center px-4">
      <UnitSinceForm />
    </div>
  </Layout>
)

const Calculating: FunctionComponent = () => (
  <TimeDisplay>Calculating…</TimeDisplay>
)

const Today: FunctionComponent<{ unit: string; count: number }> = ({
  unit,
  count,
}) => (
  <TimeDisplay>
    {count} full {unit} have gone by today.
  </TimeDisplay>
)

const SinceDate: FunctionComponent<{
  unit: string
  count: number
  date: string
}> = ({ unit, count, date }) => (
  <TimeDisplay>
    {count} full {unit} have gone by since{' '}
    {dayjs(date).format('YYYY-MM-DD[, ]HH:mm:ss')}
  </TimeDisplay>
)

export default UnitSinceStart
