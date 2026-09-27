import F1BTLeft from './F1BTLeft.jsx'
import F1BTCenter from './F1BTCenter.jsx'
import F1BTRight from './F1BTRight.jsx'
import './F1BarTop.css'

export default function F1Apex () {
  console.logD('DEBUG: L2 : F1-Apex ', '#4285f4')
  return (
    <div className='apex_hold_hold'>
      <div className='apex_hold'>
        <F1BTLeft />
        <F1BTCenter />
        <F1BTRight />
      </div>
    </div>
  )
}
