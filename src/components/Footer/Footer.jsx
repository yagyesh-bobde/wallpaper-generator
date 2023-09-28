import { Link } from 'react-router-dom'
import Subscribe from "./Subscribe";


const Footer = () => {
    const navLinks = [
        {
            title: "About Us", 
            link: '/#'
        }, 
        {
            title: "Recipes",
            link: '/recipes'
        },
        {
            title: "Meal Planner", 
            link: '/meal-planner'
        }, 
        {
            title: "Dashboard", 
            link: '/dashboard'
        }
    ]

  return (
            <footer className="px-[30px] sm:px-[100px] mt-10">
            <Subscribe />
            <section className="socials flex flex-col gap-5 md:flex-row md:flex-between py-10 border-b-[1px] border-custom-gray">
                <ul className="links w-full md:w-1/3 flex-between ">
                    {
                        navLinks.map((link, index) => (
                            <li key={index} className='text-custom-black font-semibold text-xl'>
                                <Link href={link.link}>
                                    {link.title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <ul className="socials w-full md:w-1/4 flex-between">
                    <li>
                        <Link to={""}>
                            <img src={"/assets/socials/facebook-black.svg"} alt="social" />
                        </Link>
                    </li>
                    <li>
                        <Link to={""}>
                            <img src={"/assets/socials/twitter-black.svg"} alt="social" />
                        </Link>
                    </li>
                    <li>
                        <Link to={""}>
                            <img src={"/assets/socials/vimeo-black.svg"} alt="social" />
                        </Link>
                    </li>
                    <li>
                        <Link to={""}>
                            <img src={"/assets/socials/youtube-black.svg"} alt="social" />
                        </Link>
                    </li>
                </ul>
            </section>
            <div className="footer_last_section flex-between py-10">
                <div className="text-md text-custom-gray">
                    © 2023 Meal Mate. All rights reserved.
                </div>
                <div className="">
                    <img src={"/assets/logo.svg"} width={50} alt="logo" />
                </div>
                <ul className="flex gap-10 font-semibold text-gray-500">
                    <li>
                        Terms of service
                    </li>
                    <li>
                        Privacy Policy
                    </li>
                </ul>
            </div>
        </footer>
  )
}

export default Footer
