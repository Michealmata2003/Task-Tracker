import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Events from './pages/Events';
import Home from './pages/home';
import Reservation from './pages/Reservation';

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' exact element={<Home/>} />
      <Route path='/about' exact element={<About />} />
      <Route path='/reservation' exact element={<Reservation />} />
      <Route path='/events' exact element={<Events />} />
    </Routes>
   </Router>
  );
}

export default App;
