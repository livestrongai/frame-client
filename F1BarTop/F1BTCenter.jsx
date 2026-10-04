import './F1BTCenter.css'
import Home from '../F1BarTopIcons/Home.jsx'
import Clock from '../F1BarTopIcons/Clock.jsx'

export default function F1BTCenter () {
  return (

    <div className='apex-center'>
      <Home />
      <Clock />
    </div>
  )
};

/*

Consider deprecating for a more symmetrical layout

Remove
  import Bookmark from '../F1BarTopIcons/Bookmark.jsx'
  <Bookmark />

This will be the chat / AI integration later
  {<People/>}

import User from '../F1BarTopIcons/User.jsx'
<User />

*/
