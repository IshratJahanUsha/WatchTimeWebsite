import React from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Header from './Header/Header';
import Home from './Home/Home';
import Reviews from './Review/Reviews';
import Dashboard from './Dashboard/Dashboard';
import Blogs from './Blogs/Blogs';

function App() {
  
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/reviews" element={<Reviews></Reviews>} />
        <Route path="/dashboard" element={<Dashboard></Dashboard>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
      </Routes>  
    
    </div>
  );
}

export default App;
