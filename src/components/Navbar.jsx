

const Navbar = () => {
  return (
    <div>
        <div className="flex container">
            <a className="navbar-brand d-flex align-items-center" href="index.html">
                <img className="img-fluid logo-image mr-0" src="../../public/1st-logo.jpg"></img>
                <div className="d-flex flex-column">
                    <strong className="logo-text">Internee<span className='text-black'>.pk</span></strong>
                    <small className="logo-slogan font-thin">Virtual Internship PLATFORM</small>
                </div>
            </a>
            <div className="flex-1">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Internships</li>
                    <li>Contact</li>
                    <li>LMS<sup>New</sup></li>
                    <li>Contact<sup>Coming Soon</sup></li>
                </ul>
            </div>
            <div>
                <button>Internee Portal</button>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
