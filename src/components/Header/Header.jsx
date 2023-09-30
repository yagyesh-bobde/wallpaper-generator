import Logo from '../../assets/Logo.png'
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
        <nav className="flex-between h-[10vh] border-b-[1px]">
            <NavLink to="/">
            <div className="nav_logo flex-center gap-2">
                <h3 className='font-bold'>WAL<br className='m-0'/>GEN</h3>
                <img src={Logo} width={50} alt="Meal planner logo" />
            </div>
          </NavLink>
            <ul className="nav_links flex-between w-[30%]">
                <li className='text-xl text-gray-400 font-semibold'>
                    <NavLink to="/quotes-generator" >
                        Quotes
                    </NavLink>
                </li>
                <li className='text-xl text-gray-400 font-semibold'>
                    <NavLink to="/dashboard" >
                        Dashboard
                    </NavLink>
                </li>
                <li className='text-xl text-gray-400 font-semibold'>
                    <NavLink to="/gallery" >
                        Gallery
                    </NavLink>
                </li>
            </ul>
            <div className="nav_auth text-xl">
                {
                    localStorage.getItem('login') !=='true' ?
                        <>
                            <button className='cursor-pointer hover:scale-110  duration-300 rounded-full px-5 py-2 text-gray-400 font-semibold'>
                                <NavLink to="/login">
                                    Log In
                                </NavLink>
                            </button>
                            <button className='cursor-pointer hover:scale-110  duration-300 border-[1px] border-green-400 rounded-full px-5 py-2 text-gray-400 font-semibold'>
                                <NavLink to="/signup">
                                    Sign Up
                                </NavLink>
                            </button>
                        </>
                        :
                        <button className='cursor-pointer hover:scale-110  duration-300 border-[1px] bg-black shadow-xl rounded-full px-5 py-2 text-white font-semibold' onClick={() => {
                            localStorage.removeItem('login')
                            localStorage.removeItem('id')
                            window.location.reload()
                        }}>
                            <NavLink to="/">
                                Log Out
                            </NavLink>
                        </button>
                }
            </div>
        </nav>
  )
}

export default Header