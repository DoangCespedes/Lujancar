import './Style.css';
import {ImMail} from 'react-icons/im'
import {FaWhatsappSquare} from 'react-icons/fa'
import {TiGroupOutline} from 'react-icons/ti'
import {IoLogoFacebook} from 'react-icons/io'
import {SiMaplibre} from 'react-icons/si'
import {FaInstagramSquare} from 'react-icons/fa'

export const NavSeedDial = () => {
    return (

        <>
            <div className="navigation">
                {/* <a href="#home" >
                    <BiMessageRoundedDots className="icon active-nav"/>
                </a> */}
                <a href="https://www.facebook.com/profile.php?id=100090143857535" >
                    <IoLogoFacebook className="icon"/>
                </a>
                <a href="https://www.instagram.com/lujancarautohailrepair/" >
                    <FaInstagramSquare className="icon"/>
                </a>
                <a href="https://api.whatsapp.com/send?phone=%2B17378779306&data=ARAZTf1TCoa2SuQMf2EJW4uFX67YqPZooVjkTHPFnx0-UdNm72YmIJeSzTz5OLxL6QKECo5mhyArBxx2kk0XVUHQe-Wah-j08zFyDylUQ5aYYjRc8en-Te0gpbioheqjq0hxnu2s01Dh0r5HgIchim7ziQ&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR2pDZTiQzk2_bBeQ9vtt8Yu7fCmZx9ewMVmt1EEgG6E6iJB-3VreUvmj2k" >
                    <FaWhatsappSquare className="icon"/>
                </a>
                <a href="https://mail.google.com" >
                    <ImMail className="icon"/>
                </a>
                <a href="https://www.google.com/maps/place/127+Roy+Davis+Rd,+Elgin,+TX+78621/@30.332869,-97.3470843,168m/data=!3m1!1e3!4m6!3m5!1s0x8644eca8abaaa2c5:0x6f69e54b9c4bac76!8m2!3d30.3329232!4d-97.3464654!16s%2Fg%2F11v03hg5zx?authuser=0&entry=ttu" >
                    <SiMaplibre className="icon"/>
                </a>
            </div>
        </>
      )
    }
    
    let Icons = document.querySelectorAll('.navigation.icon')
    Icons.forEach((icon) => {
        icon.addEventListener('click', () => {
            changeActive();
            icon.classList.add('active-nav')
        })
    })
    const changeActive = () =>{ 
        Icons.forEach(icon => {
            icon.classList.remove('active-nav')
        })
    }
    
    