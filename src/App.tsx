import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Login from './pages/Login';

const App: React.FC = () => {

  
  return (
    <Router >
      <Routes>
      <Route path="/home.vtt"  Component={Home} />;
      <Route path="/login.vtt"  Component={Login} />;
      </Routes>
      <Footer />
    </Router>

  );
};

export default App;