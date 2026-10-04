import { useNavigation } from './useNavigation.js'
import { SVGFinance } from '../C0Vectors/SVGFinance.jsx'

export default function Finance () {
  const { handleClick, classes } = useNavigation('Finance')
  return (
    <div onClick={handleClick} className={classes}>
      <SVGFinance className='theme-height' />
    </div>
  )
}
