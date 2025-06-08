import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import "./NavbarMain.css";
import broom from "../assets/broom.png";
import { Image } from 'react-bootstrap';
function NavbarMain(){

return (
    <Navbar expand="md" fixed='top' variant='light'className='navbar' >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='justify-content-between collapsed' >
            <Nav className="nav-links w-100 d-flex justify-content-around" >
              <Nav.Item className='d-flex align-items-center'>
                <i className="bi bi-house nav-icon"></i>
                <Nav.Link href="#home" className='green link'>Home</Nav.Link>
              </Nav.Item>

              <Nav.Item className='d-flex align-items-center'>
                <i className="bi bi-calendar nav-icon"></i>
                 <Nav.Link href="#reservation" className='link'>Make a reservation</Nav.Link>
              </Nav.Item>

              <Nav.Item className='d-flex align-items-center'>
                <Image src={broom} className="nav-icon" />
                  <Nav.Link href="#services" className='green link'>Services</Nav.Link>
              </Nav.Item>
            </Nav>
              <div className="contact-info d-flex align-items-center gap-2">
            <i className="bi bi-telephone-fill fs-4 green  nav-icon"></i>
            <div>
              <p className="mb-0 call-text">Who you gonna call?</p>
              <p className="mb-0 number">474-948-034</p>
            </div>
               
            </div>
            </Navbar.Collapse>
            </Navbar>
);
}  

export default NavbarMain;



