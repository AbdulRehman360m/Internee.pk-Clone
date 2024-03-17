import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="py-4 bg-white">
        <div className="flex container m-auto max-w-auto">
            <a className="navbar flex flex-1 items-center justify-center" href="index.html">
                <img className="w-20 mr-0" src="../../public/1st-logo.jpg"></img>
                <div className="flex flex-col">
                    <strong className="logo-text text-green-primary text-4xl">Internee<span className='text-black'>.pk</span></strong>
                    <small className="logo-slogan font-bold text-xs leading-3  text-purple-primary">VIRTUAL INTERNSHIP PLATFORM</small>
                </div>
            </a>
            <div className="flex-2 flex items-center">
                <ul className="flex items-center  gap-10 text-xl font-thin">
                    <li><NavLink to="" className={({isActive}) => `${isActive ? 'text-purple-primary' : 'text-text-primary'}hover:text-purple-primary cursor-pointer`}>Home</NavLink></li>
                    <li><NavLink to="about"  className={({isActive}) =>  `${isActive ? 'text-purple-primary' : 'text-text-primary'} hover:text-purple-primary cursor-pointer`}>About</NavLink></li>
                    <li><NavLink to="internships"  className={({isActive}) =>  `${isActive ? 'text-purple-primary' : 'text-text-primary'} hover:text-purple-primary cursor-pointer`}>Internships</NavLink></li>
                    <li><NavLink to="contact"  className={({isActive}) =>  `${isActive ? 'text-purple-primary' : 'text-text-primary'} hover:text-purple-primary cursor-pointer`}>Contact</NavLink></li>
                    <li><NavLink to="lms"  className={({isActive}) =>  `${isActive ? 'text-purple-primary' : 'text-text-primary'} hover:text-purple-primary cursor-pointer`}>LMS<sup>New</sup></NavLink></li>
                    <li><NavLink to="portal"  className={({isActive}) =>  `${isActive ? 'text-purple-primary' : 'text-text-primary'} hover:text-purple-primary cursor-pointer`}>Job Portal<sup>Coming Soon</sup></NavLink></li>
                </ul>
            </div>
            <div className="flex-1 items-center justify-center flex">
                <button className="py-2 text-white px-6 text-xl font-thin bg-purple-primary rounded-full ">Internee Portal</button>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
