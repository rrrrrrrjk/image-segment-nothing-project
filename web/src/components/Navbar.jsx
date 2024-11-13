import React from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../constant'

const Navbar = () => {
  return (
    <header>
        <nav className='flex px-20 justify-between py-5 bg-gradient-to-b from-gray-800 to-transparent to-70% text-white sticky top-0 z-50 w-full h-[123px]'>
            <div className='flex flex-col -space-y-3 '>
                <h1 className='font-grifter text-[32px] drop-shadow-md'>Segment Nothing</h1>
                <span className='font-inter text-[16px] text-slate-400 drop-shadow-md'>Research by Su team</span>
            </div>
            <ul className='flex items-center list-none gap-40 font-grifter text-[16px]'>
                {
                    navLinks.map((item) => (
                        <li key={item.label} className='after:content-[""] after:block after:w-full after:h-[2px] after:bg-current after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300 ease-in-out'>
                            <Link to={item.link} className='drop-shadow-xl'>
                                {item.label}
                            </Link>
                        </li>
                    ))
                }
            </ul>                
        </nav>
    </header>   
  )
}

export default Navbar