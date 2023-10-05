
import { NavBar } from "../components/navBar/NavBar"
import { Outlet } from "react-router-dom";
import { NavSeedDial } from "../components/navSpeedDial/NavSeedDial";
import { Footer } from "../components/footer/Footer";

export const App = () => {
  return (
    <>
      <NavBar/>
      <Outlet/>
      <NavSeedDial/>
      <Footer/>
    </>
  )
}

