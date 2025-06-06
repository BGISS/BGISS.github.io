import "./HomePage.css";
import Stack from 'react-bootstrap/Stack';
import logo from "../assets/logo.png"
import  Image  from "react-bootstrap/Image";
import { Button, Col, Container, Row } from "react-bootstrap";

function HomePage(){
  
function handleButtonClick() {
    const target = document.getElementById("reservation");
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
}
    return(
        <div id="home">
        <Stack className="body">
        
            <Container fluid className="main-container">
            <Row className="">
             <Col xs={12} md={6} className="image-container text-center ">
                  <Image src={logo} className="responsive-logo" fluid />
                </Col>
             <Col xs={12} md={6} className="text-container">
              <p className="big-text">Ottawa's most reliable cleaning service!</p>
                 <p className="small-text">
                 Don't be afraid of no  <span className="dust">dust!</span>
                </p>
            </Col>
            </Row>
        </Container>
        <div className="footer w-100 px-3">
                <Row>
                <Col xs={6}className="footer-text">
                Want to know more?</Col>
                <Col xs={6} className="button-col">
                <Button onClick={handleButtonClick}className="footer-button" size="lg"> Get Clean Now!</Button></Col>
            </Row>
        </div>
        </Stack>
        </div>
    );
}

export default HomePage;