import { useState } from 'react'
import './C1Logo.css'
export default function C1Logo () {
  const [rotation, setRotation] = useState(true)
  function setGlobalOpacity (currentRotation) {
    if (currentRotation) {
      document.documentElement.style.setProperty('--opa', 'var(--bg-white-10)')
    } else {
      document.documentElement.style.setProperty('--opa', 'var(--bg-white-90)')
    }
  }
  function onClick () {
    setGlobalOpacity(rotation)
    setRotation(!rotation)
  }
  return (
    <img 
      src="/images/favicon.svg" 
      alt="Logo"
      className="left-logo"
      id={rotation ? 'rotate_00' : 'rotate_90'}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    />
  )
};