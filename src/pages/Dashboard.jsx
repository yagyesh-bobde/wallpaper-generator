import { useState, useEffect, useContext } from "react"
import { NavLink, useNavigate, useLocation } from 'react-router-dom'

import DeleteModal from '../components/Modal/DeleteModal'
import YourWallpapers from '../components/Carousel/YourWallpapers'
import YourQuotes from '../components/Quotes/YourQuotes'
import Profile from '../components/Profile/Profile'
import WalGenerator from './WalGenerator'
import walgenContext from '../context/walgenContext'

import ProfileIcon from '../assets/profile.svg'
import Cool from '../assets/cool.svg'
import Quote from '../assets/quote.svg'
import Wallpaper from '../assets/wallpaper.svg'

const Dashboard = () => {
  const navigate= useNavigate()
  const location = useLocation()
 


    useEffect(() => {
      console.log(localStorage.getItem('login'))
        if (localStorage.getItem('login')!== 'true'){ 
            navigate('/login')
        } 
    }, [])


  return (
    <div className="overflow-hidden flex min-h-[88vh] max-h-[89vh] ">
      <nav className="border-r-2 border-gray-200 min-h-full w-1/6 p-5 flex flex-col gap-5"> 
        <ul className="flex flex-col justify-center h-full">
          <NavLink to="/dashboard">
            <li className="text-xl font-semibold flex  gap-5 hover:bg-gray-100 duration-300 cursor-pointer  py-3 px-2 hover:scale-110" >
              <img src={Quote} alt="all quote" style={{ transform: 'scaleX(-1)'}} />
              <p>All Quotes</p>
            </li>
          </NavLink>
          <NavLink to="/dashboard/wallpapers">
            <li className="text-xl font-semibold flex  gap-5 hover:bg-gray-300 duration-300 cursor-pointer py-3 px-2 hover:scale-110" >
              <img src={Wallpaper} alt="all quote" style={{ transform: 'scaleX(-1)'}} />
              <p>Your Wallpapers</p>
            </li>
          </NavLink>
          <NavLink to="/dashboard/wallpaper-generator">
            <li className="text-xl font-semibold flex  gap-5 hover:bg-gray-300 duration-300 cursor-pointer py-3 px-2 hover:scale-110" >
              <img src={Cool} alt="all quote" style={{ transform: 'scaleX(-1)'}} />
              <p>WalGen Tool</p>
            </li>
          </NavLink>
          <NavLink to="/dashboard/profile">
            <li className="text-xl font-semibold flex  gap-5 hover:bg-gray-300 duration-300 cursor-pointer py-3 px-2 hover:scale-110" >
              <img src={ProfileIcon} alt="all quote" style={{ transform: 'scaleX(-1)'}} />
              <p>Profile</p>
            </li>
          </NavLink>
        </ul>
      </nav>
      <div className="relative p-5 w-5/6" >
        {
          (location.pathname === '/dashboard') && <YourQuotes />
        }
        {
          (location.pathname === '/dashboard/wallpaper-generator') && <WalGenerator />
        }
        {
          (location.pathname === '/dashboard/wallpapers') && <YourWallpapers />
        }
        {
          location.pathname ==='/dashboard/profile' && <Profile />
        }
 

      </div>
    </div>
  )
}

export default Dashboard