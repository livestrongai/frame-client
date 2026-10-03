import arc from 'frame-arc'
import './C2Copy.css'
import { SVGCopy } from '../C0Vectors/SVGCopy.jsx'

export default function C2Copy (props) {
  const slug = props.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  const hashLink = window.location.origin + '#' + slug
  function onClick () {
    arc.copyToClipboard(hashLink)
    alert('Copied the text: ' + hashLink)
  }
  return <SVGCopy className='article_icons_right' onClick={onClick} />
};
