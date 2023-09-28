
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
        <nav className="flex-between h-[10vh] border-b-[1px]">
            <div className="nav_logo flex-center gap-2">
                <h3>Meal<br className='m-0'/>Mate</h3>
                <img src="/assets/logo.svg" width={50} alt="Meal planner logo" />
            </div>
            <ul className="nav_links flex-between w-[30%]">
                <li className='text-xl text-gray-400 font-semibold'>
                    <NavLink to="/plan" >
                        Meal Plans
                    </NavLink>
                </li>
                <li className='text-xl text-gray-400 font-semibold'>
                    <NavLink to="/tracker" >
                        Nutrition Tracker
                    </NavLink>
                </li>
                <li className='text-xl text-gray-400 font-semibold'>
                    <NavLink to="/recipes" >
                        Recipes
                    </NavLink>
                </li>
            </ul>
            <div className="nav_auth text-xl">
                <button className=' rounded-full px-5 py-2 text-gray-400 font-semibold'>
                    Log In
                </button>
                <button className='border-[1px] border-green-400 rounded-full px-5 py-2 text-gray-400 font-semibold'>
                    Sign Up
                </button>
            </div>
        </nav>
  )
}

export default Header