import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoImage from '../Navbar/logo/test.webp';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


function Navigation() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
      <Navbar.Brand 
          href="/">
          <img
            src={logoImage} 
            alt="Kuehne+Nagel"
            style={{
              maxWidth: '200px',
              maxHeight: '100px',
              width: 'auto',
              height: 'auto',
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/crud">CRUD</Nav.Link>
            <NavDropdown title="More" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/Q&A">Q&A</NavDropdown.Item>
              <NavDropdown.Item href="/about">
                About us
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/contact">
                Contact Me
              </NavDropdown.Item>
            </NavDropdown>

            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>CRUD</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              CRUD, which stands for Create, Read, Update, Delete, are the essential operations for managing data in databases.

              In code, CRUD operations might look like this in a simple JavaScript context:
              <p></p>
              Add
              <SyntaxHighlighter language="javascript" style={docco}>
{`
/* 
  Add a state to track the new 
  shipment data
*/
const [newShipment, setNewShipment] = useState({
  orderNo: "",
  date: "",
  customer: "",
  trackingNo: "",
  status: "",
  consignee: "",
});

/* 
  Add a function to handle input changes 
  for the new shipment
*/
const handleNewShipmentChange = (e) => {
  const { name, value } = e.target;
  setNewShipment(
    { ...newShipment, [name]: value }
  );
};

/*
 Add a function to handle the submission 
 of the 
 new shipment
*/ 
const handleCreateClick = () => {
  // Validate the newShipment data if needed
  /* 
    Perform any necessary checks and 
    data formatting
  */
  // Add the new shipment to the listArray
  setList([...listArray, newShipment]);

  // Clear the new shipment form
  setNewShipment({
    orderNo: "",
    date: "",
    customer: "",
    trackingNo: "",
    status: "",
    consignee: "",
  });
};

// In your JSX, add the form for creating a new shipment
<div>
  {/* ... */}
  <h2>Create Shipment</h2>
  <form>
    <label>Order No</label>
    <input
      type="text"
      name="orderNo"
      value={newShipment.orderNo}
      onChange={handleNewShipmentChange}
    />
    {/* Add similar input fields for other 
    shipment properties */}
    <button 
      type="button" 
      onClick={handleCreateClick}>
      Create Shipment
    </button>
  </form>
</div>

`}
                </SyntaxHighlighter>
                Read:
                <p></p>
                Current code already implements the Read operation by displaying the list of shipments in a table.
                <p></p>
                Update: Modify an existing record
                <SyntaxHighlighter language="javascript" style={docco}>
  {`
/*
 Add state to track the edited shipment 
 and an edit mode
*/
const [editedShipment, setEditedShipment] = 
  useState(null);
const [isEditMode, setIsEditMode] = 
  useState(false);

// Function to enter edit mode
const enterEditMode = (shipment) => {
  setEditedShipment({ ...shipment });
  setIsEditMode(true);
};

// Function to save changes after editing
const saveEditedShipment = () => {
  // Validate editedShipment data if needed
  /*
   Perform any necessary checks 
   and data formatting
  */
  /*
   Find the index of the edited shipment 
   in the listArray
  */
  const index = listArray.findIndex(
    (shipment) => shipment.orderNo === 
      editedShipment.orderNo
  );

  if (index !== -1) {
    // Update the shipment in the listArray
    const updatedList = [...listArray];
    updatedList[index] = editedShipment;
    setList(updatedList);

    // Exit edit mode
    setEditedShipment(null);
    setIsEditMode(false);
  }
};

/*
 In your JSX, add the edit functionality to 
 each row in the table
*/
{tableList.map((shipment, index) => (
  <tr key={index}>
    {/* ... */}
    <td>
      {isEditMode && editedShipment.orderNo === 
          shipment.orderNo ? (
        <button onClick={saveEditedShipment}>
          Save</button>
      ) : (
        <button onClick={() => 
          enterEditMode(shipment)}>Edit
        </button>
      )}
    </td>
  </tr>
))}

`}
                </SyntaxHighlighter>
                Delete:
                <p></p>
                Code already implements the Delete operation when clicking the "Delete" button. 
                It removes the selected shipment from the listArray.
                <p></p>
                These operations are fundamental for data management in various applications and databases.
              </Offcanvas.Body>
            </Offcanvas>
            <Button variant="primary" className='Launch' onClick={handleShow}>
              What is crud ?
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;