import { Row,Col, Card } from "react-bootstrap";
import { useState,useEffect } from "react";
import "./ServicesPage.css";
import vacuumingImage from "../assets/vacuum.png";
import bathtub from "../assets/bathtub.png";
import moping from "../assets/moping.png";
import disinfectant from "../assets/disinfectant.png";
import 'bootstrap-icons/font/bootstrap-icons.css';

function ServicesPage() {
// Array of services with images to make the cards
const allServices=[
        {title:"Vacuuming", img: vacuumingImage},
        {title:"Bathtub cleaning", img: bathtub},
        {title:"Moping", img: moping},
        {title:"Disinfecting", img: disinfectant}
    ]
const [index, setIndex] = useState(0);
const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
// useEffect to dynamically adjust number of cards displayed based on screen size
  useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 576);
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);
    // Function to handle cards navigation
const step = isMobile ? 1 : 2;

const handleNext = () => {
        if (index + step < allServices.length) {
          setIndex(index + step)};
    };

const handlePrev = () => {
        if (index - step >= 0){
           setIndex(index - step);}
      }

  return (
    <div id="services" className="services-page container-fluid">
      <div className="header-text container-fluid">
        <Row>
            <Col className="servi">
            Servi
            </Col>
            <Col></Col>
            <Col></Col>
        </Row>
        <Row>
            <Col>
                
            </Col>
             <Col className="ces" >
             ces
            </Col>
             <Col >
            </Col>
        </Row>
      </div>
      <div className="main-content container-fluid">
      <div className="main-text">
         <p><span style={{color:"#608977",fontSize:"3em"}}>W</span>e are proud to call ourselves Ottawa's number 1 cleaners. You can check out all our services available by clicking on the carousel on the right.</p>
      </div>
     
       <div className="slider-wrapper">
      <button className="chevron" onClick={handlePrev} disabled={index === 0}>
        <i className="bi bi-chevron-left"></i>
      </button>

      <div className="cards-slider">
        {/* Show only 2 cards at a time */}
        {allServices.slice(index, index+(isMobile ? 1 : 2)).map((service, i) => (
          <Card className="service-card" key={i}>
            <Card.Img src={service.img} />
            <Card.Body>
              <Card.Title>{service.title}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>

      <button
        className="chevron"
        onClick={handleNext}
        disabled={index + (isMobile ? 1 : 2) >= allServices.length}
      >
        <i className="bi bi-chevron-right"></i>
      </button>
    </div>
      </div>
    </div>
  );
}

export default ServicesPage;