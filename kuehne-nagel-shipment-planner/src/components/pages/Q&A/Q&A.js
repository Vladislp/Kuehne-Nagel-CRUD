import React from "react";
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBTextArea,
} from "mdb-react-ui-kit";

export default function WithContactForm() {
  return (
    <MDBContainer className="mt-5" style={{maxWidth: '1000px'}}>
      <section>
        <MDBRow>
          <MDBCol lg="6" md="12" className="mb-4">
            <div>
              <p className="mb-1">
                <strong>Are there any dependencies or libraries used in the project?</strong>
              </p>
              <p className="mb-1">
                <u>Yes there are</u> ...
              </p>
              <ul>
                <li>React</li>
                <li>Axios</li>
                <li>react-bootstrap</li>
              </ul>
            </div>

            <div>
              <p className="mb-1">
                <strong>What does CRUD stand for?</strong>
              </p>
              <p className="mb-1">
                <u>Create, Read, Update, and Delete (CRUD) are the four basic functions that models should be able to do, at most.</u>
              </p>
              <p className="mb-1">
              When we are building APIs, we want our models to provide four basic types of functionality. The model must be able to Create, Read, Update, and Delete resources. Computer scientists often refer to these functions by the acronym CRUD. A model should have the ability to perform at most these four functions in order to be complete. If an action cannot be described by one of these four operations, then it should potentially be a model of its own.
              </p>
            </div>

            <div>
              <p className="mb-1">
                <strong>
                How do I make API calls to retrieve data?
                </strong>
              </p>
              <p className="mb-1">
                <u>Axios</u>
              </p>
              <p className="mb-1">
                api-call.js will provide source code for you
              </p>
            </div>

            <div>
              <p className="mb-1">
                <strong>Is there any authentication or user management in the application?</strong>
              </p>
              <p className="mb-1">
                <u>No, no need for that now</u>
              </p>
            </div>
          </MDBCol>
          <MDBCol lg="6" md="12" className="text-center">
            <p>
              <span class="fw-bold">
                Still have any questions? Contact us to get your answer!
              </span>
            </p>

            <form>
              <MDBInput label="Email address" required className="mb-4" />
              <MDBTextArea rows={4} label="Message" className="mb-4" />
              <MDBBtn block>Send</MDBBtn>
            </form>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
  );
}