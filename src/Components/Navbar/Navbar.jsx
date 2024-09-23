/* eslint-disable no-unused-vars */

import './Navbar.css'
import logo from '../../assets/logo.svg'
import React, { useRef, useState } from 'react'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

  const [ menu , setMenu] = useState("home");
  const menuRef = useRef();

 const openMenu = () =>{
  menuRef.current.style.right= "0";
 }
 const closeMenu = () =>{
  menuRef.current.style.right= "-350px";
 }

  return (
    <div  className='navbar'>
        
 
{/*      
           <h2>YNDM</h2> */}
          <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
      

        <ul ref={menuRef} className="nav-menu">
            <img src={menu_close} onClick={closeMenu} alt=""  className='nav-mob-close'/>
            <li><AnchorLink href="#home" offset={50} className='a-link'><p onClick={()=> setMenu("home")}>Home</p></AnchorLink> {menu === 'home'?  <img src={underline} alt="" /> : <></> }</li>
            <li><AnchorLink href="#about" offset={50} className='a-link'><p onClick={()=> setMenu("about")}>About Me</p></AnchorLink>  {menu === 'about'?  <img src={underline} alt="" /> : <></> }</li>
            <li><AnchorLink href="#projects" offset={50} className='a-link'><p onClick={()=> setMenu("projects")}>Projects</p></AnchorLink>  {menu === 'projects'?  <img src={underline} alt="" /> : <></> }</li>
            <li><AnchorLink href="#contact" offset={50}  className='a-link'><p onClick={()=> setMenu("contact")}>Contact</p> </AnchorLink> {menu === 'contact'?  <img src={underline} alt="" /> : <></> }</li>
           
        </ul>
        <div className="nav-connect"><AnchorLink href="#contact" offset={50} className='a-link'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar