import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";    
import Home from './pages/home'

const App = () => { 
  return ( 
      <BrowserRouter> 
          <Routes>  
              <Route exact path="/" name="Login Page" element={<Home />} /> 
              {/* <Route exact path="/" name="Login Page" element={<Navigate to={'/login'} />} />
              <Route path="/forgot-password" name="Forgot Page" element={<ForgotPassword />} />
              <Route path="/404" name="Page 404" element={<Page404 />} /> */}
          </Routes>
      </BrowserRouter>
  )
}


export default App;
