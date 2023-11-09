import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import AboutUs from "./Component/AboutUs";
import Service from "./Component/Service";
import ContactUs from './Component/ContactUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/service' element={<Service />} />
          <Route path='/contactus' element={<ContactUs />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
