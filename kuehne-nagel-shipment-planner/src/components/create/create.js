import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import array from '../api-call/api-call';
import { v4 as uuid } from 'uuid';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Create() {
    const [orderNo, setOrderNo] = useState('');
    const [date, setdate] = useState('');
    const [customer, setcustamer] = useState('');
    const [TrackingNo, setTrackingNo] = useState('');
    const [status, setStatus] = useState('');
    const [consignee, setConsignee] = useState('');

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uni = ids.slice(0,8)

        let a = orderNo
        let b = date 
        let c = customer
        let d = TrackingNo
        let e1 = status
        let f = consignee
        array.push({ id: uni, orderNo: a, date: b, customer: c})

        history('/')
    }

    return (
        <div >
            <h1>Create a new entry in CRUD table</h1>
            <Form className="d-grid gap-2" 
                style={{ margin: '15rem' }}>
  
                <Form.Group className="mb-3" 
                    controlId="formBasicName">
                    <Form.Control onChange=
                        {e => setOrderNo(e.target.value)}
                        type="text"
                        placeholder="Enter order number" required />
                </Form.Group>
  
                <Form.Group className="mb-3" 
                    controlId="formBasicAge">
                    <Form.Control onChange=
                        {e => setdate(e.target.value)}
                        type="text"
                        placeholder="Date" required />
                </Form.Group>

                <Form.Group className="mb-3" 
                    controlId="formBasicAge">
                    <Form.Control onChange=
                        {e => setcustamer(e.target.value)}
                        type="text"
                        placeholder="customer" required />
                </Form.Group>

                <Form.Group className="mb-3" 
                    controlId="formBasicAge">
                    <Form.Control onChange=
                        {e => setTrackingNo(e.target.value)}
                        type="text"
                        placeholder="TrackingNo" required />
                </Form.Group>

                <Form.Group className="mb-3" 
                    controlId="formBasicAge">
                    <Form.Control onChange=
                        {e => setStatus(e.target.value)}
                        type="text"
                        placeholder="status" required />
                </Form.Group>

                <Form.Group className="mb-3" 
                    controlId="formBasicAge">
                    <Form.Control onChange=
                        {e => setConsignee(e.target.value)}
                        type="text"
                        placeholder="consignee" required />
                </Form.Group>
  
                <Button
                    onClick={e => handleSubmit(e)}
                    variant="primary" type="submit">
                    Submit
                </Button>
  
                <Link className="d-grid gap-2" to='/'>
                    <Button variant="info" size="lg">
                        Home
                    </Button>
                </Link>
            </Form>
        </div>
    )
}

export default Create