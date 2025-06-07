import { Button, Form, Toast, ToastContainer } from "react-bootstrap";
import "./ReservationPage.css";
import { DayPicker, Root } from "react-day-picker";
import "react-day-picker/style.css";
import { useState } from "react";
import CustomDropdown from "./CustomDropdown";

function ReservationPage(){

const [selected, setSelected] = useState();
const [dateError, setDateError] = useState("");
const [show, setShow] = useState(false)
const [selectedServices, setSelectedServices] = useState([]);
const [servicesError,setServicesError]= useState("");

//Get the curent date
const presentDate = new Date();
//Set maximum reservation date to 2 months from current date
const maxDate = new Date(presentDate);
maxDate.setMonth(maxDate.getMonth() + 2);

const [validated, setValidated] = useState(false);
const [formErrors, setFormErrors] = useState({});

const validateField = (field, value) => {
    let error = "";
    // Validate each field based on its type
    if (field === "name") {
        if (!value) error = "Valid Name is required.";
            else if (value.length < 2) error = "Name must be at least 2 characters long.";
     }
    if (field === "email") {
     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = "Invalid email format.";
    }
  }
    if (field === "address") {
        if (value.length < 5) error = "Address must be at least 5 characters long.";
    }
    if (field === "phone") {
        if (value.length < 10) error = "Phone must be 10 digits.";
    }
    return error;
}
const handleFieldChange = (field, value) => {
    let error = validateField(field, value);
    setFormErrors(prev => ({ ...prev, [field]: error }));
};

const handleSubmit = (event) => {
    const form = event.currentTarget;
    
    event.preventDefault();
    event.stopPropagation();
    
    const name = form.formName.value.trim();
    const email = form.formEmail.value.trim();
    const phone = form.formPhone.value.trim();
    const address = form.formAddress.value.trim();
    const errors = {
    name: validateField("name", name),
    email: validateField("email", email),
    phone: validateField("phone", phone),
    address: validateField("address", address)
     };
    if (!selected) {
        setDateError("Please select a date.");
    } else {
        setDateError("");
        }
    if (selectedServices.length === 0) {
        setServicesError("Please select at least one service.");
    } else {
        setServicesError("");
    }
    setFormErrors(errors);
    setValidated(true);
    console.log(servicesError);
    const hasErrors = Object.values(errors).some(error => error) || !selected||selectedServices.length === 0;;

    if (!hasErrors) { 
    setSelectedServices([]);
     form.reset();
     //Show toast
     setShow(true)
     setSelected(null)
     setValidated(false);
     const target = document.getElementById("home");
     //Scroll to homepage
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    }
  };
      
    return( 
        <div id="reservation" className="reservation-page container-fluid">
            <div className="header">Make your reservation</div>
            <div className="main-container-service container-fluid">
            <div className="form-container">
                <Form  noValidate validated={validated} onSubmit={handleSubmit} id="form">
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Full name</Form.Label>
                        <Form.Control required type="text" placeholder="Enter your name" isInvalid={!!formErrors.name}  onChange={(e)=>handleFieldChange("name",e.target.value.trim())}/>
                        <Form.Control.Feedback type="invalid">
                            {formErrors.name}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control required type="email" placeholder="123@gmail.com"isInvalid={!!formErrors.email} onChange={(e)=>handleFieldChange("email",e.target.value.trim())}/>
                        <Form.Control.Feedback type="invalid">
                            {formErrors.email}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control required type="text" placeholder="123 Avenue" isInvalid={!!formErrors.address}onChange={(e)=>handleFieldChange("address",e.target.value.trim())}/>
                        <Form.Control.Feedback type="invalid">
                            {formErrors.address}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPhone">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control required type="tel" placeholder="(123) 456-7890" onChange={(e)=>handleFieldChange("phone",e.target.value.trim())} isInvalid={!!formErrors.phone}/>
                        <Form.Control.Feedback type="invalid">
                            {formErrors.phone}
                        </Form.Control.Feedback>
                    </Form.Group>
           <CustomDropdown 
           options={["Bathtub", "Cleaning", "Disinfecting", "Moping", "Vacuuming"]} 
           selectedServices={selectedServices}
           setSelectedServices={setSelectedServices}
           error={servicesError}
           setServicesError={setServicesError}
           />
                </Form>
            </div>
            <div className="date-container">
                <div>
                    <p className="dust-bust">Choose your <span style={{color:"#FAD049"}}>dust-busting</span> day</p>
                    <div className="date-picker">
                        <DayPicker
                        animate
                        startMonth={presentDate}
                        disabled={{ before: presentDate }}
                        endMonth={maxDate}
                        mode="single"
                        selected={selected}
                        onSelect={date => {
                            setSelected(date);
                            setDateError("");
                        }}
                        footer={selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."}
                                 />
                                     {dateError && <div style={{ color: 'red', marginTop: '0.5rem' }}>{dateError}</div>}
                        </div>
                </div>
                 <div className="submit-container">
                <Button type="submit" form="form"className="submit-button">Dust-busting time</Button>
                </div>
            </div>
            </div>
            { show &&(
                <ToastContainer position="top-end" className="p-3">
                <Toast  onClose={() => setShow(false)} show={show} delay={5000} autohide >
                     <Toast.Header>
                   <strong className="me-auto">Form submitted successfully!</strong>
                 </Toast.Header>
                 <Toast.Body>Thank you for your reservation! We will contact you soon.</Toast.Body>
                </Toast>
                </ToastContainer>
            )}
        </div>
    )
}

export default ReservationPage;