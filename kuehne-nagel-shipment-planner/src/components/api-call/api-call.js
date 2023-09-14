import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function CallKuehne() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { pathname } = useLocation();
  const renderCreateButton = pathname !== '/create';

  useEffect(() => {
    // Define the API URL
    const apiUrl = 'https://my.api.mockaroo.com/shipments.json?key=5e0b62d0';
    // Make the API call
    axios
      .get(apiUrl)
      .then((response) => {
        // Handle successful response
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        // Handle error
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  // Function to render the buttons in the footer
  const renderFooterButtons = () => {
    if (!renderCreateButton) {
      return null;
    }

    return (
      <>
        <Link to="/create" className="btn btn-primary">
          Create
        </Link>
        <Link to="/read" className="btn btn-primary">
          Read
        </Link>
        <Link to="/update" className="btn btn-primary">
          Update
        </Link>
        <Link to="/delete" className="btn btn-primary">
          Delete
        </Link>
      </>
    );
  };

  // Function to render the data as a table
  const renderTable = () => {
    return (
      <div>
        <MDBTable>
          <MDBTableHead>
            <tr>
              <th>Order No</th>
              <th>Date</th>
              <th>Customer</th>
              <th>Tracking No</th>
              <th>Status</th>
              <th>Consignee</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.orderNo}</td>
                <td>{item.date}</td>
                <td>{item.customer}</td>
                <td>{item.trackingNo}</td>
                <td>{item.status}</td>
                <td>{item.consignee}</td>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
        <footer>{renderFooterButtons()}</footer>
      </div>
    );
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {renderTable()}
        </div>
      )}
    </div>
  );
}

export default CallKuehne;
