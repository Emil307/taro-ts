import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import AuthPage from '../pages/AuthPage';
import SignUpPage from '../pages/SignUpPage';
import './index.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/auth' element={<AuthPage/>} />
        <Route path='/signUp' element={<SignUpPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;