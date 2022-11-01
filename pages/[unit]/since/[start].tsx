import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import type { NextPage } from 'next'
import { FunctionComponent } from 'react'
import { ExampleSection } from '../../../src/components/ExampleSection'
import { Layout } from '../../../src/components/Layout'
import { TimeDisplay } from '../../../src/components/TimeDisplay'
import { UnitSinceForm } from '../../../src/components/UnitSinceForm'
import { FCWithChildren } from '../../../src/helpers'
import { allowedStarts } from '../../../src/time-functions'
import { useUnitCount } from '../../../src/useUnitCount'

dayjs.extend(localizedFormat)

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

const Page: FCWithChildren = ({ children }) => (
  <Layout>
    <div className="mt-32">{children}</div>
    <div className="mt-10 flex justify-center px-4">
      <UnitSinceForm />
    </div>
    <div className="mt-32 px-4">
      <ExampleSection />
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
    <span className="sm:whitespace-nowrap">
      <span className="whitespace-nowrap">{dayjs(date).format('ll')}</span>{' '}
      {!dayjs(date).startOf('day').isSame(dayjs(date)) && (
        <span className="sm:whitespace-nowrap">
          {dayjs(date).format('LTS')}
        </span>
      )}
    </span>
  </TimeDisplay>
)

export default UnitSinceStart
