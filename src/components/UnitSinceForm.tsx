import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  FunctionComponent,
  SelectHTMLAttributes,
  useEffect,
  useState,
} from 'react'
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
    <div className="text-center border rounded border-pink-200 p-8 w-max">
      <div className="flex flex-col sm:flex-row sm:justify-center space-x-4 items-end mb-8">
        <label>
          <span className="block italic mb-4">How many of what</span>{' '}
          <Select className="mb-4 sm:mb-0" value={unit} onChange={onUnitChange}>
            {['', ...allowedUnits].map(unitName => (
              <option key={unitName}>{unitName}</option>
            ))}
          </Select>
        </label>{' '}
        <span className="mb-4 sm:mb-0">have gone by since</span>{' '}
        <label>
          <span className="block italic mb-4">which point in time</span>{' '}
          <Select value={start} onChange={onStartChange}>
            {['', ...allowedStarts.filter(s => s !== 'thisDay')].map(
              startName => (
                <option key={startName} value={startName}>
                  {startName === 'today'
                    ? startName
                    : startName
                        .slice(0, 4)
                        .concat(' ', startName.slice(4).toLowerCase())}
                </option>
              )
            )}
          </Select>
        </label>
      </div>
      {unit.length > 0 && start.length > 0 ? (
        <Link href={`/${unit}/since/${start}`}>
          <a
            onClick={e => e.currentTarget.blur()}
            className="border rounded-md border-pink-200 px-4 py-2 focus:ring-1 focus:ring-pink-300 focus:border-pink-300 focus:outline-none"
          >
            Go
          </a>
        </Link>
      ) : null}
    </div>
  )
}

const Select: FunctionComponent<SelectHTMLAttributes<HTMLSelectElement>> = ({
  children,
  className,
  ...rest
}) => (
  <select
    className={`bg-transparent border-pink-200 focus:border-pink-300 focus:ring-pink-300 ${className}`}
    {...rest}
  >
    {children}
  </select>
)
