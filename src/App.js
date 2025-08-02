import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import DoctorProfile from './components/DoctorProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/profile/:id" element={<DoctorProfile />} />
      </Routes>
    </Router>
  );

}

export default App;
