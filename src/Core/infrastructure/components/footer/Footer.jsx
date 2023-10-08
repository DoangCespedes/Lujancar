import logo from '../../../../assets/logo.png';
import './Style.css'

export const Footer = () => {
  return (
    <>
        <footer>

            <div class="container__footer">
                <div class="box__footer">
                    <div class="logo">
                        <img src={logo} alt="logo"/>
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
                    <a href="#">Acerca de</a>
                    <a href="#">Trabajos</a>
                    <a href="#">Procesos</a>
                    <a href="#">Servicios</a>              
                </div>

                <div class="box__footer">
                    <h2>Social Networks</h2>
                    <a href="#"> <i class="fab fa-facebook-square"></i> Facebook</a>
                    <a href="#"><i class="fab fa-twitter-square"></i> Twitter</a>
                    <a href="#"><i class="fab fa-linkedin"></i> WhatsApp</a>
                    <a href="#"><i class="fab fa-instagram-square"></i> Instagram</a>
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
