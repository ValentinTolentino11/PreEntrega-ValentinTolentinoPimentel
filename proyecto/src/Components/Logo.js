import React from 'react'
import foto from '../favicon.png'
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/">
        <img src={foto} width="50px" height="50px" alt='' />
      </Link>
  )
}

export default Logo