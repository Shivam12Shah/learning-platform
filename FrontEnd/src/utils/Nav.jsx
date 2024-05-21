import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className=' w-full h-[60px] flex  justify-between items-center px-10 shadow-sm text-[#8B77E8] '>
     <Link to="/"> <h1 className='logomainheading'>Learnify</h1></Link>
      <div className="courselidt flex gap-4">
        <div className="courselidt-item">
          <Link to='/'>Home</Link>
        </div>
        <div className="courselidt-item">
          <Link to="/about">About</Link>
        </div>
        <div className="courselidt-item">
          <Link to='/courses'>Courses</Link>
        </div>
        <div className="courselidt-item">
          <Link to='/contact'>Contact</Link>
        </div>
      </div>
      <div className="signups flex gap-2 text-white text-sm">
        <button className='bg-[#8B77E8] px-4 py-1 rounded'>Login</button>
      </div>
    </nav>
  )
}

export default Nav