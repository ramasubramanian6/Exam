import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>Please correct Page URL. Click here to <Link to="/">HomePage</Link></div>
  )
}

export default Error