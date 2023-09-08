import './App.css';
import BasicExample from './components/Navbar/navbar';
import FluidExample from './components/background/background';

function App() {
  return (
    <div className='App'>
      <header>
        <BasicExample />
      </header>
      <main>
        <FluidExample />
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
