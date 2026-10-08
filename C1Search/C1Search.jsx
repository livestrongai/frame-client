import { useDispatch, useSelector } from 'react-redux'
import './C1Search.css'
import { updateSearchInput } from '../_redux/f-search'

export default function C1Search () {
  const dispatch = useDispatch()
  const page = useSelector((state) => state.MenuPage.current)
  const SearchCurrent = useSelector((state) => state.SearchInput.current)
  // const CSSID = (page === 'Articles') ? 'search_input_show' : 'search_input_hide'
  const onChange = (event) => dispatch(updateSearchInput(event.target.value))

  return (
    <input
      type='text'
      className='left_input'
      id='search_input_show'
      name='search'
      placeholder=' Search'
      value={SearchCurrent}
      onChange={onChange}
    />
  )
};
