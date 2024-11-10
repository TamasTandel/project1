import React from 'react'
import './components.css'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
    <>
      <div className="nav h-[60px] w-full bg-green-800 text-black flex item-center justify-between">
            <div className="leftNav flex h-[60px] gap-2">
                <img src="../public/Circle AZ Logo.enc" alt="" className='companyLogo h-[60px] rounded-full' />
                <div className="companyName text-6xl">AZ Books</div>
            </div>
            <div className="rightNav flex h-[60px] gap-2 items-center">
            <i className="ri-search-2-line search h-[60px] text-6xl" ></i>
            <button className='login h-[50px] w-24 text-2xl rounded-2xl p-1 border-[3px] border-black font-semibold'>
        <Link to='/login'>Login</Link>
            </button>
            <i className="ri-menu-3-fill menu h-[60px] text-6xl"></i>
            </div>
        </div>
    </>
  )
}

export default Nav