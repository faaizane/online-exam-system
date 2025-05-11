import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/teacherLogin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/teacherLogin" replace />} />
        <Route path="/teacherLogin" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App
