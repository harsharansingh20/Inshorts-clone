import React from 'react'
import "./Navbar.css";
import HamburgerDrawer from "./HamburgerDrawer";



const Navbar = ({setCategory}) => {
  return (
    <>
    
    <div className='nav'>
       <div className="icon">
        <HamburgerDrawer setCategory ={setCategory} />
       </div>

      <img id='navlogo' src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"  alt="" />

    </div>
    </>
  )
}

export default Navbar