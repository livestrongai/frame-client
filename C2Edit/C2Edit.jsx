import { useDispatch } from 'react-redux'
import { SVGEdit } from '../C0Vectors/SVGEdit.jsx'
import './C2Edit.css'
import { setArticleForm } from '../_redux/a-article-form'
import { toggleModalOn } from '../_redux/f-modal'

export default function C2Edit ({ article, admin }) {
  const dispatch = useDispatch()
  function editClicked () {
    if (!admin) {
      alert('You must be logged in as an administrator for this operation')
      return
    }
    dispatch(toggleModalOn(true))
    dispatch(setArticleForm(article))
  }
  return <SVGEdit className='article_icons_right' onClick={editClicked} />
}
