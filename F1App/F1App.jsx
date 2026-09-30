import './F1App.css'
import A1User from '../A1User/A1User.jsx'
import A1Article from '../A1Article/A1Article.jsx'

// import { A1Bookmark } from '../A1Bookmark/A1Bookmark.jsx'
// import A1Station from '../A1Station/A1Station.jsx'
// import A1People from '../A1People/A1People.jsx'

import { useSelector } from 'react-redux'

export default function F1App () {
  const page = useSelector((state) => state.MenuPage.current)
  console.logD('DEBUG: L2 : F1-App', '#4285f4')
  return (
    <div id='page_hold'>
      <div className='page_container'>

        {(page === 'User') && <A1User />}
        {(page === 'Articles') && <A1Article />}

        {/* {(page === 'Bookmarks') && <A1Bookmark />}
        {(page === 'Clock') && <A1Station />}
        {(page === 'People') && <A1People />} */}

      </div>
    </div>
  )
};
