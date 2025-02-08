import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Footer />
    </div>
  );
};

export default App;
