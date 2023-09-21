import { useEffect, useState } from 'react';
import { MDBContainer } from "mdb-react-ui-kit";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function WithContactForm() {
  // isLoading: This state variable tracks whether the button is in the loading state (true) or the clickable state (false).
  const [isLoading, setLoading] = useState(false);
  /* 
    Inside the useEffect hook, there is a function called simulateNetworkRequest. 
    This function returns a Promise that resolves after a 2-second delay (simulating a network request).
  */
  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }
    /*
      The useEffect hook listens for changes in the isLoading state. 
      When isLoading becomes true, it triggers the network request simulation.
    */
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);
  /*
    The handleClick function is defined to set isLoading to true when the button is clicked.
    When the button is clicked, it sets isLoading to true, indicating that it's in the loading state.
  */
  const handleClick = () => {
    setLoading(true);
  }
  

  // Finally, the return statement renders the button element.
  return (
    <MDBContainer className="mt-5" style={{maxWidth: '1000px'}}>
      <section>
        <h3 class="text-center mb-4 pb-2 text-primary fw-bold">FAQ</h3>
        <p class="text-center mb-5">
          Find the answers for the most frequently asked questions below
        </p>

        <div class="row">
          <div class="col-md-6 col-lg-4 mb-4">
            <h6 class="mb-3 text-primary"><i class="far fa-paper-plane text-primary pe-2"></i> What is this project about?</h6>
            <p>
              This project is a <strong>CRUD</strong> (Create, Read, Update, Delete) table application built using React and Bootstrap. 
              It allows you to manage and manipulate data entries.
            </p>
          </div>

          <div class="col-md-6 col-lg-4 mb-4">
            <h6 class="mb-3 text-primary"><i class="fas fa-pen-alt text-primary pe-2"></i> How do I navigate between different CRUD operations?</h6>
            <p>
              You can navigate between Create, Read, Update, and Delete operations using the navigation links at the top of the page.
            </p>
          </div>

          <div class="col-md-6 col-lg-4 mb-4">
            <h6 class="mb-3 text-primary"><i class="fas fa-user text-primary pe-2"></i> Can I import data from an external source?
            </h6>
            <p>
              <strong>Yes, you can. </strong>
              Data is currently loaded from an external API. 
              You can modify the API endpoint to load data from a different source.
            </p>
          </div>

          <div class="col-md-6 col-lg-4 mb-4">
            <h6 class="mb-3 text-primary"><i class="fas fa-rocket text-primary pe-2"></i> Can I use this project as a starting point for my own application?
            </h6>
            <p>
              <strong>Absolutely! </strong>
              This project can serve as a foundation for building your own CRUD application. 
              You can customize it to fit your specific requirements and data structure.
            </p>
          </div>

          <div class="col-md-6 col-lg-4 mb-4">
            <h6 class="mb-3 text-primary"><i class="fas fa-home text-primary pe-2"></i> How can I search for specific entries in the table?
            </h6>
            <p>
              Currently, there is no search functionality in this project. You can manually scroll through the table to find entries.
            </p>
          </div>

          <div class="col-md-6 col-lg-4 mb-4">
            <h6 class="mb-3 text-primary"><i class="fas fa-book-open text-primary pe-2"></i> Is my data saved permanently?</h6>
            <p>
              <strong>No, </strong> the data in this project is stored in memory and will be lost when you close or refresh the page. 
              To persist data, you would need to implement server-side storage or a database.
            </p>
          </div>
          <Link to="/email">
            <Button variant="primary">
              If you have any more questions, you can contact us via email
            </Button>
          </Link>
        </div>
      </section>
    </MDBContainer>
  );
}