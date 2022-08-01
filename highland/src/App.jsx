import React from 'react'
import AboutUs from './components/pages/AboutUs/Aboutus';
import Admission from './components/pages/Admission/Admission';
import {BrowserRouter , Route , Routes} from 'react-router-dom'

const App = ()=>{
  return (
    <div>
      <BrowserRouter>
        <Routes> 
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/admission" element={<Admission/>} />
        </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App; 