import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import "./NavbarMain.css";
function NavbarMain(){

return (
    <Navbar expand="md" fixed='top' variant='light'className='border-bottom border-4 border-dark navbar' >
        <Container fluid >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='justify-content-between collapsed' >
            <Nav className="nav-links w-100 d-flex justify-content-around" >
                <Nav.Link href="#home" className='green link'>Home</Nav.Link>
                <Nav.Link href="#reservation" className='link'>Make a reservation</Nav.Link>
                <Nav.Link href="#services" className='green link'>Services</Nav.Link>                    
            </Nav>
              <div className="contact-info d-flex align-items-center gap-2">
            <i className="bi bi-telephone-fill fs-4 green"></i>
            <div>
              <p className="mb-0 call-text">Who you gonna call?</p>
              <p className="mb-0 number">474-948-034</p>
            </div>
               
            </div>
            </Navbar.Collapse>
        </Container>
            </Navbar>
);
}  

export default NavbarMain;



