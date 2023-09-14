import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CallKuehne() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [tableState, setTableState] = useState({
    data: [],
    itemsPerPage: 10,
    totalSize: 0,
  });
  const [isLoadingTable, setIsLoadingTable] = useState(true);

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

  // Function to render the data as a table
  const renderTable = () => {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Order No</th>
              <th>Date</th>
              <th>Customer</th>
              <th>Tracking No</th>
              <th>Status</th>
              <th>Consignee</th>
            </tr>
          </thead>
          <tbody>
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
          </tbody>
        </table>
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
