import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import About from './components/About';
import Notion from './components/Notion';
import Rush from './components/Rush';
import Brothers from './components/Brothers';
import Impact from './components/Impact';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <div className="header-spacer"></div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/notion" element={<Notion />} />
        <Route path="/rush" element={<Rush />} />
        <Route path="/brothers" element={<Brothers />} />
        <Route path="/impact" element={<Impact />} />
        {/* <Route path="/our-brothers" element={<OurBrothers />} />
        <Route path="/philanthropy" element={<Philanthropy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> Catch-all for 404s */}
      </Routes>
      <Footer /> {/* ✅ Footer stays at the bottom */}
    </Router>
  );
};

export default App;
