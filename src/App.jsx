import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Dashboard/Home';
import Tasks from './Pages/Dashboard/Tasks';
import Games from './Pages/Dashboard/Games';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Signup/>}/>
          <Route path="/dashboard" element={<Home/>}/>
          <Route path="/tasks" element={<Tasks/>}/>
          <Route path="/games" element={<Games/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
