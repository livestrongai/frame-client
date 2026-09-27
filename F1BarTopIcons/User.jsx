import { useNavigation } from './useNavigation.js'
import { SVGUser } from '../C0Vectors/SVGUser.jsx'

export default function User () {
  const { handleClick, classes } = useNavigation('User')
  return (
    <div onClick={handleClick} className={classes}>
      <SVGUser className='theme-height' />
    </div>
  )
}
