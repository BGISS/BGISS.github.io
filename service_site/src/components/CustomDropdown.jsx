import { useState } from "react";
import { Dropdown, Form } from "react-bootstrap";
import "./CustomDropdown.css"

function CustomDropdown({ options, selectedServices, setSelectedServices, error,setServicesError }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleOption = (option) => {
    //updates the selected services array whenever a service is toggled
    const updated = selectedServices.includes(option)
      ? selectedServices.filter((item) => item !== option)
      : [...selectedServices, option];
    setSelectedServices(updated);
    if(updated.length>0){
        setServicesError("")
    }
  };

  return (
    <Form.Group className="mb-3">
  
      <Form.Label>Select services</Form.Label>
      <Dropdown show={showDropdown} onToggle={() => setShowDropdown(!showDropdown)}>
        <Dropdown.Toggle variant={error ? "danger" : "secondary"} id="dropdown-basic">
          {selectedServices.length > 0 ? selectedServices.join(", ") : "Select services"}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {options.map((option, index) => (
            <Form.Check
              key={index}
              type="checkbox"
              label={option}
              checked={selectedServices.includes(option)}
              onClick={() => toggleOption(option)}
             
            />
          ))}
        </Dropdown.Menu>
      </Dropdown>
      {error && (
        <Form.Text className="text-danger">{error}</Form.Text>
      )}
    </Form.Group>
  );
}
export default CustomDropdown;