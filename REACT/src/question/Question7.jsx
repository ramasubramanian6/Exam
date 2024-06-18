import React from 'react';
import {Route, Routes, Link } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Menu from './Pages/Menu';
import Error from './Pages/Error';
import About from './Pages/About';

function AllRouters() {
  return (
    <Routes>
     <Route path="/" element={<HomePage/>}></Route>
     <Route path="/menu" element={<Menu/>}></Route>
     <Route path='/about' element={<About/>}></Route>
     <Route path="*" element={<Error/>}></Route>
    </Routes>
  );
}

function Question67() {
  return (
    <>
    <div>Create a multi-page( 3 pages ) application using React Router.
    </div>
    <nav>
      <Link to="/"> Home </Link>
      <Link to="/menu">  Menu </Link>
      <Link to="/about"> About us</Link>
      <AllRouters/>
    </nav>
    </>
  );
}

export default Question67;
