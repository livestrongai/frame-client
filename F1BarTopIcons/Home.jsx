import { useNavigation } from './useNavigation.js'
import { SVGHome } from '../C0Vectors/SVGHome.jsx'

export default function Home () {
  const { handleClick, classes } = useNavigation('Articles')
  return (
    <div onClick={handleClick} className={classes}>
      <SVGHome className='theme-height' />
    </div>
  )
}
