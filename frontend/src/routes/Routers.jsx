import React from 'react'
import Home from "../pages/Home"
import Login from "../pages/Login"
import Service from "../pages/service"
import Signup from "../pages/Signup"
import Contact from "../pages/Contact"
import Doctor from "../pages/Doctors/Doctor"
import DoctorDetails from "../pages/Doctors/DoctorDetails"

import {Routes, Route} from "react-router-dom"


const router = () => {
  return <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/home' element={<Home/>} />
    <Route path='/doctors' element={<Doctor/>} />
    <Route path='/doctors/:id' element={<DoctorDetails/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Signup/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/services' element={<Service/>} />
  </Routes> 

}

export default router