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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items to display per page
 

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

  /*
    data.length -> number of elements in data
    itemsPerPage -> number of items we want to display
    data.length / itemsPerPage -> how many pages would be required to distribute items
    Math.ceil -> round up the result of the division to nearest whole number
  */

  const totalPages = Math.ceil(data.length / itemsPerPage);

  /*
    This condition checks if the current page (currentPage) 
    is greater than 1. If it is, it means that there is a 
    previous page of data that the user can navigate to. 
    If the current page is 1, there is no previous page, 
    and clicking "Previous" should have no effect.
  */
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  /*
    Here is basically other way around. If our current page
    is for example 1 and it is not larger then 20 (in our case)
    then there is a still place to go up (pages).
  */
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to render the data as a table
  const renderTable = () => {
    /*
      In summary, this logic calculates the range of data 
      (specified by startIndex and endIndex) that should be 
      shown on the current page of a paginated list. 
      By using the slice() method, it creates a new array 
      containing only the data for the current page, 
      which can then be rendered in your user interface.
    */
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedData = data.slice(startIndex, endIndex)

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
            {displayedData.map((item, index) => (
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
            <div className="pagination">
              <button onClick={handlePrevPage} disabled={currentPage === 1}>
                Previous
              </button>
              <span>Page {currentPage} of {totalPages}</span>
              <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                Next
              </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CallKuehne;
