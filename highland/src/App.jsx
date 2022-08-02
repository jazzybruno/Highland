import React from 'react'
import Landing from './components/pages/landing/Landing'
import AboutUs from './components/pages/AboutUs/Aboutus';
import Admission from './components/pages/Admission/Admission';
import {BrowserRouter , Route , Routes} from 'react-router-dom'


const App = ()=>{
  return (
    <div>
 
      <BrowserRouter>
        <Routes> 
        <Route path='/home' element={<Landing />} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/admission" element={<Admission/>} />
        </Routes>
       </BrowserRouter>

    </div>
  )
}

export default App; 