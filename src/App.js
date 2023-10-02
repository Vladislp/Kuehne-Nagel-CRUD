import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navigation from './components/Navbar/navbar';
import OverlayOfBackground from './components/background/background';
import CrudTable from './components/background/card/crud';
import QA from './components/pages/Q&A/Q&A';
import AboutMe from './components/pages/about/about';
import ContactMe from './components/pages/contact/ContactMe';
import { FormPage } from './components/pages/Q&A/EmailSend/EmailSend';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Login from './components/pages/login/login';
import Register from './components/pages/register/register';



function App() {
  return (
      <div className='App'>
        <header>
          <Navigation />
        </header>
        <main>
          <div className='content'>
            <Routes>
              <Route exact path="/" element={<OverlayOfBackground />} />
            </Routes>
          </div>
          <OverlayOfBackground />
        </main>
        <footer>
            <Routes>
              <Route exact path="/crud" element={<CrudTable />} />
              <Route path="/Q&A" element={<QA />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/contact" element={<ContactMe />} />
              <Route path="/offcanvas" element={<ContactMe />} />
              <Route path="/email" element={<FormPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>

        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
              <div className='me-5 d-none d-lg-block'>
                <span>Get connected with us on social networks:</span>
              </div>

              <div>
                <a href='' className='me-4 text-reset'>
                  <MDBIcon color='secondary' fab icon='facebook-f' />
                </a>
                <a href='' className='me-4 text-reset'>
                  <MDBIcon color='secondary' fab icon='twitter' />
                </a>
                <a href='' className='me-4 text-reset'>
                  <MDBIcon color='secondary' fab icon='google' />
                </a>
                <a href='' className='me-4 text-reset'>
                  <MDBIcon color='secondary' fab icon='instagram' />
                </a>
                <a href='' className='me-4 text-reset'>
                  <MDBIcon color='secondary' fab icon='linkedin' />
                </a>
                <a href='' className='me-4 text-reset'>
                  <MDBIcon color='secondary' fab icon='github' />
                </a>
              </div>
            </section>

            <section className='' >
              <MDBContainer className='text-center text-md-start mt-5'>
                <MDBRow className='mt-3'>
                  <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>
                      <MDBIcon color='secondary' icon='gem' className='me-3' />
                      Future Developer OÜ
                    </h6>
                    <p>
                      We are company of big food enjoyers.
                    </p>
                  </MDBCol>

                  <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                    <p>
                      <a href='https://react.dev/' className='text-reset'>
                        React
                      </a>
                    </p>
                    <p>
                      <a href='https://react-bootstrap.netlify.app/docs/getting-started/introduction' className='text-reset'>
                        React bootstrap
                      </a>
                    </p>
                    <p>
                      <a href='https://mdbootstrap.com/' className='text-reset'>
                        Mdb bootstrap
                      </a>
                    </p>
                    <p>
                      <a href='https://www.w3schools.com/html/' className='text-reset'>
                        HTML5
                      </a>
                    </p>
                  </MDBCol>

                  <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                    <p>
                      <a href='https://www.linkedin.com/in/vladislav-pa%C5%A1kevit%C5%A1-295b7823a/' className='text-reset'>
                        Linked-In
                      </a>
                    </p>
                    <p>
                      <a href='https://github.com/Vladislp' className='text-reset'>
                        Github
                      </a>
                    </p>
                    <p>
                      <a href='https://www.facebook.com/vlad.paskevits' className='text-reset'>
                        Facebook
                      </a>
                    </p>
                  </MDBCol>

                  <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                    <p>
                      <MDBIcon color='secondary' icon='home' className='me-2' />
                      Tallinn, TLN, 100001, EST
                    </p>
                    <p>
                      <MDBIcon color='secondary' icon='envelope' className='me-3' />
                      vladpaskevits27@gmail.com
                    </p>
                    <p>
                      <MDBIcon color='secondary' icon='phone' className='me-3' /> 
                      +372 5806 6561
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
              © 2023 Copyright:
              <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                 Vladislav Paškevitš
              </a>
            </div>
          </MDBFooter>
        </footer>
      </div>
  );
}

export default App;
