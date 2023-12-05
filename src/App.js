import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Home from './Theme/Components/Home';
import About from './Theme/Components/About';
import Services from './Theme/Components/Services';
import ContactUs from './Theme/Components/ContactUs';
import "../src/Theme/styles/globals.css"
import "../src/Theme/styles/Home.module.css"
import "../src/Theme/styles/responsive.css";
import Header from './Theme/Components/Common/Header';
import Footer from './Theme/Components/Common/Footer';
import PageNotFount from './Theme/Components/PageNotFount';
import { useEffect, useRef } from 'react';



function App() {


  return (
    <div className="app">

      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/service' element={<Services />} />
        <Route exact path='/contact' element={<ContactUs />} />
        <Route exact path='*' element={<PageNotFount />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
