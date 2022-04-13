import { BrowserRouter, Link, NavLink, Route, Routes, useParams } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Header from './components/Header/Header';

import Home from './components/Home/Home';

import AuthProvider from './components/context/AuthPorvider';

import Login from './components/Login/Login'
import Order from './components/Order/Order';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Myorder from './components/Myorder/Myorder';




function App() {
  
  return (
    <div>
     <AuthProvider>
     <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />    
        <Route path="/myorder" element={<Myorder />} />    
        <Route path="/home/myorder/:id" element={<PrivateRoute><Order /></PrivateRoute>} />    
        {/* <Route path="/myorder" element={<Myoreder />} />     */}
        <Route path="/myorder/:id" element={<PrivateRoute><Order /></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
      </Routes>
  </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
