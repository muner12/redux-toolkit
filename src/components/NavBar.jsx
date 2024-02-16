import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div className='bg-blue-300'>
        <ul className='flex justify-between bg-blue-500'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/contact">Contact</Link></li>

        </ul>
    </div>
  )
}
