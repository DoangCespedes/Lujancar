import { useRef,useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {FiPhoneCall} from "react-icons/fi";
import { NavLink } from "react-router-dom";
import logo from '../../../../assets/logo.png';
import "./Style.css";

export const NavBar= () => {
    const navRef = useRef();

    const [active, setActive] = useState(true)
    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
        setActive(false)
        setActive(true)
    }

  return (
    <>
        <div className="nav-top">
        <p className="red-top"> <span><FiPhoneCall/></span> CALL US: +1.512.782.8523 <span><FiPhoneCall/></span> CALL US: +1.737.587.4010</p>
        </div>
        <header>
            {/* <h3  className="logo">Logo</h3> */}
            <img src={logo} alt='log' className="logo"/>
            <nav ref={navRef}>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/mywork'>My work</NavLink>
                {active === false &&
                    <img src={logo} alt='log' className="logo"/>
                }
                <NavLink to='/'>Blog</NavLink>
                <NavLink to='/about'>About</NavLink>
                <button onClick={showNavBar} className="nav-btn nav-close-btn">
                    {active === false &&
                        <FaTimes/>
                    }
                </button>
                
            </nav>

            <button onClick={showNavBar} className="nav-btn">
                {active === true &&
                    <FaBars/>
                }
            </button>
        </header>
    </>
  )
}
