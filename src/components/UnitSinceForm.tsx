import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { allowedStarts, allowedUnits } from '../time-functions'

export const UnitSinceForm: FunctionComponent = () => {
  const [unit, setUnit] = useState('')
  const [start, setStart] = useState('')
  const router = useRouter()
  const pathUnit = router.query.unit
  const pathStart = router.query.start

  useEffect(() => {
    if (unit === '' && typeof pathUnit === 'string') {
      setUnit(pathUnit)
    }
    if (start === '' && typeof pathStart === 'string') {
      setStart(pathStart)
    }
  }, [pathUnit, pathStart, unit, start])

  const onUnitChange: React.EventHandler<
    React.ChangeEvent<HTMLSelectElement>
  > = evt => {
    setUnit(evt.currentTarget.value)
  }
  const onStartChange: React.EventHandler<
    React.ChangeEvent<HTMLSelectElement>
  > = evt => {
    setStart(evt.currentTarget.value)
  }
  return (
    <div className="text-center">
      <label>
        <span>How many of what</span>{' '}
        <select value={unit} onChange={onUnitChange}>
          {['', ...allowedUnits].map(unitName => (
            <option key={unitName}>{unitName}</option>
          ))}
        </select>
      </label>{' '}
      <span>since</span>{' '}
      <label>
        <span>which point in time</span>{' '}
        <select value={start} onChange={onStartChange}>
          {['', ...allowedStarts.filter(s => s !== 'thisDay')].map(
            startName => (
              <option key={startName}>{startName}</option>
            )
          )}
        </select>
      </label>{' '}
      {unit.length > 0 && start.length > 0 ? (
        <Link href={`/${unit}/since/${start}`}>Go</Link>
      ) : null}
    </div>
  )
}
