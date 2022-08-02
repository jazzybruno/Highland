import React from 'react'
import Landing from './components/pages/landing/Landing'
import AboutUs from './components/pages/AboutUs/Aboutus';
import Admission from './components/pages/Admission/Admission';
import Meeting from './components/ui/Meeting/Meeting';
import {BrowserRouter , Route , Routes} from 'react-router-dom'


const App = ()=>{
  return (
    <div>

      <BrowserRouter>
        <Routes> 
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/admission" element={<Admission/>} />
          <Route path='/meet' element={<Meeting />} />
          <Route path='/' element={<Landing />} />
        </Routes>
       </BrowserRouter>

    </div>
  )
}

export default App; 