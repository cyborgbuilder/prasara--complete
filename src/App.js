import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Page from './components/Page';
import Careers from './components/Careers'
import Contact from './components/Contact';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Production from './components/Production';
import Sustainability from './components/Sustainability';
import Footer from './components/Footer';
import SocialBooth from './components/SocialBooth';
import Brands from './components/Brands'
function App() {
  // let component
   // eslint-disable-next-line default-case
  //  switch (window.location.pathname) {
  //    case "/":
  //      component = <Home />
  //      break;
  //    case "/about":
  //      component = <About />
  //      break;
  //    case "/Careers":
  //      component = <Careers />
  //     break;
  //    case "/Contact":
  //      component = <Contact />
  //     break;  
  //    case "/page":
  //      component = <Page />
  //      break;
  //  }
  return (
    <div className="App">
      {/* <Navbar />
      {component} */}

      <BrowserRouter>
      <Navbar />
      <SocialBooth />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/brands' element={<Brands />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/production' element={<Production />} />
          <Route path='/sustainability' element={<Sustainability />} />
        </Routes>
        <Footer />
        
      </BrowserRouter>
    </div>
  );
}

export default App;
