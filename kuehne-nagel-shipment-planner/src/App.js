import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import BasicExample from './components/Navbar/navbar';
import FluidExample from './components/background/background';
import CrudTable from './components/card/crud';
import Create from './components/create/create';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';



function App() {
  // To remember, where exaclty i am in my routes
  const { pathname } = useLocation();
  const renderCreateButton = pathname !== '/create';
  return (
      <div className='App'>
        <header>
          <BasicExample />
        </header>
        <main>
          <div className='content'>
            <Routes>
              <Route exact path="/" element={<FluidExample />} />
            </Routes>
          </div>
          <FluidExample />
        </main>
        <footer>
            <Routes>
              <Route exact path="/crud" element={<CrudTable />} />
              <Route path="/create" element={<Create />} />
            </Routes>
              
            {renderCreateButton && (
              <Link to="/create" className="btn btn-primary">
                Create
              </Link>
            )}
        </footer>
      </div>
  );
}

export default App;
