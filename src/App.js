// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import PropertyPostingForm from './components/PropertyPostingForm';
import PostedProperties from './components/PostedProperties';
import Contact from './components/Contact'
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/PropertyPostingForm" element={<PropertyPostingForm />} />
          <Route path="/PostedProperties" element={<PostedProperties />} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
