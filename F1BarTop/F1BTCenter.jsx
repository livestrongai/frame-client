import './F1BTCenter.css'
import Home from '../F1BarTopIcons/Home.jsx'
import User from '../F1BarTopIcons/User.jsx'
import Bookmark from '../F1BarTopIcons/Bookmark.jsx'

export default function F1BTCenter () {
  // console.logD('DEBUG: L3 : F1-Apex-Center ');
  return (

    <div className='apex-center'>
      <User />
      <Home />
    </div>
  )
};

/*

Consider deprecating for a more symmetrical layout

Remove
  <Bookmark />

This will be the chat / AI integration later
  {<People/>}
*/
