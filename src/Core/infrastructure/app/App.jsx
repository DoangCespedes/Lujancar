
import { NavBar } from "../components/navBar/NavBar"
import { Outlet } from "react-router-dom";
import { NavSeedDial } from "../components/navSpeedDial/NavSeedDial";
import { Footer } from "../components/footer/Footer";
import { Slider } from "../components/carousels/slider/Slider";

export const App = () => {
  return (
    <>
      <NavBar/>
      <Slider/>
      <Outlet/>
      <NavSeedDial/>
      <Footer/>
    </>
  )
}

