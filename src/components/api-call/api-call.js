import React, { useState, useEffect } from 'react';
import { Table, Modal, Button } from 'react-bootstrap';
import axios from 'axios';

function Shipments() {

    const baseUrl = "https://my.api.mockaroo.com/shipments.json?key=5e0b62d0";
    const [listArray, setList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [show, setShow] = useState(false);
    const [selectedShipment, setSelectedShipment] = useState(null);
    const itemsPerPage = 5;

    // Fetching the data
    const fetchData = async () => {
        const url = `${baseUrl}`;
        const response = await axios.get(url);
        setList(response.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const totalItems = listArray.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const tableList = listArray.slice(startIndex, endIndex).map((shipment, index) => {
        return (
            <tr key={index}>
                <th>{shipment.orderNo}</th>
                <th>{shipment.date}</th>
                <th>{shipment.customer}</th>
                <th>{shipment.trackingNo}</th>
                <th>{shipment.status}</th>
                <th>{shipment.consignee}</th>
                <th>
                    <Button
                        onClick={() => {
                            handleDescriptionClick(shipment);
                        }}
                    >
                        Details
                    </Button>
                </th>
                <th>
                    <Button
                        variant='danger'
                        onClick={() => {
                            handleDeleteClick(shipment);
                        }}
                    >
                        Delete
                    </Button>
                </th>
            </tr>
        );
    });

    const handleDescriptionClick = (shipment) => {
        setSelectedShipment(shipment);
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
        setSelectedShipment(null);
    };

    const handleDeleteClick = (shipment) => {
        const updatedList = listArray.filter((item) => item.orderNo !== shipment.orderNo);
        setList(updatedList);
    };

    return (
        <div>
            <Table striped bordered hover variant="light" >
                <thead>
                    <tr>
                        <th>ORDER NO</th>
                        <th>DELIVERY DATE</th>
                        <th>CUSTOMER</th>
                        <th>TRACKING NO</th>
                        <th>STATUS</th>
                        <th>CONSIGNEE</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {tableList}
                </tbody>
            </Table>
            <div className="d-flex justify-content-end" style={{ marginRight: '20px' }}>
                <Button variant="primary" className='mr-2' onClick={prevPage}>
                    Previous
                </Button>
                <Button variant="primary" style={{ marginLeft: '10px' }} onClick={nextPage}>
                    Next
                </Button>
            </div>
            <Modal show={show} size="lg" onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shipment Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedShipment && (
                        <div>
                            <div style={{ width: "50%", float: "left" }}>
                                <h4>OrderNo</h4>
                                <p>{selectedShipment.orderNo}</p>
                                <h4>Customer</h4>
                                <p>{selectedShipment.customer}</p>
                                <h4>Consignee</h4>
                                <p>{selectedShipment.consignee}</p>
                            </div>
                            <div style={{ width: "50%", float: "left" }}>
                                <h4>Date</h4>
                                <p>{selectedShipment.date}</p>
                                <h4>TrackingNo</h4>
                                <p>{selectedShipment.trackingNo}</p>
                                <h4>Status</h4>
                                <p>{selectedShipment.status}</p>
                            </div>
                        </div>
                    )}
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Shipments;
