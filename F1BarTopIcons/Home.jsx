import { useNavigation } from './useNavigation.js'
import { SVGArticle } from '../C0Vectors/SVGArticle.jsx'

export default function Home () {
  const { handleClick, classes } = useNavigation('Articles')
  return (
    <div onClick={handleClick} className={classes}>
      <SVGArticle className='theme-height' />
    </div>
  )
}
