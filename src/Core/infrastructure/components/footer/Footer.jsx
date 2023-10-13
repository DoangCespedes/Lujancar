import { NavLink } from 'react-router-dom';
import {ImMail} from 'react-icons/im'
import {FaWhatsappSquare} from 'react-icons/fa'
import {TiGroupOutline} from 'react-icons/ti'
import {IoLogoFacebook} from 'react-icons/io'
import {SiMaplibre} from 'react-icons/si'
import {FaInstagramSquare} from 'react-icons/fa'
import logo from '../../../../assets/logo.png';
import './Style.css'

export const Footer = () => {
  return (
    <>
        <footer>

            <div class="container__footer">
                <div class="box__footer">
                    <div class="logo">
                    <NavLink to='/'><img src={logo} alt="logo"/></NavLink>
                    </div>
                    <div class="terms">
                        <p>Ready to regain your car's original appearance? At Lujancar Auto Hail Repair, we're here to help. Contact us today to schedule a free evaluation of your hail damage and discover why we are the number one choice for hail repair. Don't let hail damage ruin your vehicle's beauty. Trust the experts at Lujancar Auto Hail Repair to restore its splendor!</p>
                    </div>
                </div>
                {/* <div class="box__footer">
                    <h2>Soluciones</h2>
                    <a href="https://www.google.com">App Desarrollo</a>
                    <a href="#">App Marketing</a>
                    <a href="#">IOS Desarrollo</a>
                    <a href="#">Android Desarrollo</a>
                </div> */}

                <div class="box__footer">
                    <h2>Company</h2>
                    <NavLink to='/mywork'>My_Work</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>  
                    <NavLink to='/galery'>Galery</NavLink>        
                </div>

                <div class="box__footer">
                    <h2>Social Networks</h2>
                    <a href="https://www.facebook.com/profile.php?id=100090143857535"> <IoLogoFacebook/> Facebook</a>
                    <a href="https://www.google.com/maps/place/127+Roy+Davis+Rd,+Elgin,+TX+78621/@30.332869,-97.3470843,168m/data=!3m1!1e3!4m6!3m5!1s0x8644eca8abaaa2c5:0x6f69e54b9c4bac76!8m2!3d30.3329232!4d-97.3464654!16s%2Fg%2F11v03hg5zx?authuser=0&entry=ttu"><SiMaplibre/> GoogleMap</a>
                    <a href="https://api.whatsapp.com/send?phone=%2B17378779306&data=ARAZTf1TCoa2SuQMf2EJW4uFX67YqPZooVjkTHPFnx0-UdNm72YmIJeSzTz5OLxL6QKECo5mhyArBxx2kk0XVUHQe-Wah-j08zFyDylUQ5aYYjRc8en-Te0gpbioheqjq0hxnu2s01Dh0r5HgIchim7ziQ&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR2pDZTiQzk2_bBeQ9vtt8Yu7fCmZx9ewMVmt1EEgG6E6iJB-3VreUvmj2k"><FaWhatsappSquare/> WhatsApp</a>
                    <a href="#"><FaInstagramSquare/> Instagram</a>
                </div>

            </div>

            <div class="box__copyright">
                <hr/>
                <p>All rights reserved © 2023 <b>Lujancar</b></p>
            </div>
            </footer>
    </>
  )
}
