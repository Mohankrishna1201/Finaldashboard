import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Signup from './components/Signup'
import Login from './components/Login'
import Dashboard from './Dashboard'


export default function App() {
  return (
    <Routes>

      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='signup' element={<Signup />} />
    </Routes>
  )
}
