import { Route, Routes, Link } from 'react-router-dom';
import RemoteWork from './pages/RemoteWork';
import GadgetPolicy from './pages/GadgetPolicy';
import LeavePolicy from './pages/LeavePolicy';
import './App.css';

function App() {
  return (
    
      <div className="app">
        <header className="header">
          <h1>ONE AIM</h1>
          <h2> HR Policies</h2>
          <nav>
            <Link to="/">Remote Work</Link>
            <Link to="/gadget">Gadget Policy</Link>
            <Link to="/leave">Leave Policy</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<RemoteWork />} />
            <Route path="/gadget" element={<GadgetPolicy />} />
            <Route path="/leave" element={<LeavePolicy />} />
          </Routes>
          
        </main>
      </div>
    
  );
}

export default App;
