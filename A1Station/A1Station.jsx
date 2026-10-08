import { useEffect, useState } from 'react'
import getLocation from './StationLocation'
import StationClock from './StationClock.jsx'
import StationWeather from './StationWeather.jsx'
import StationAir from './StationAir.jsx'
import './A1Station.css'

export default function A1Station () {
  console.logD('DEBUG: L3 : F1-App-Station ')

  // default location is Austin, TX
  const [lat, setLat] = useState(30.2827813)
  const [lon, setLong] = useState(-97.7384504)

  useEffect(() => {
    getLocation().then((location) => {
      setLat(location.coords.latitude)
      setLong(location.coords.longitude)
      console.logD('DEBUG: navigator.geolocation: location found ' + location.coords.latitude, '#888888')
    }).catch((error) => {
      console.logD('DEBUG: no access to location: using default: message: ' + error.message, '#888888')
    })
  }, [])

  return (
    <div className='page_generic'>
      <div id='station'>
        <StationClock />
        <StationWeather lat={lat} lon={lon} />
        <StationAir lat={lat} lon={lon} />
      </div>
    </div>
  )
}
