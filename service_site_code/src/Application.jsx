import  NavbarMain from "./components/NavbarMain"
import Home from "./components/HomePage"
import ReservationPage from "./components/ReservationPage"
import ServicesPage from "./components/ServicesPage"

function Application() {
  return (
    <>
     <NavbarMain/>
      <Home/>
        <ServicesPage/>
      <ReservationPage/>
      </>
  );
}

export default Application;