import React from 'react'
import Landing from './components/pages/landing/Landing'
import Contact from './components/pages/Contact/Contact';
import AboutUs from './components/pages/AboutUs/Aboutus';
import Admission from './components/pages/Admission/Admission';
import OurTeam from './components/pages/outTeam/OurTeam';
import Blog from './components/pages/Blog/Blog';
import {BrowserRouter , Route , Routes} from 'react-router-dom'




const App = ()=>{
  return (
    <div>
 
      <BrowserRouter>
        <Routes> 
       
        <Route path='/Landing' element={<Landing />} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/admission" element={<Admission/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/team" element={<OurTeam/>} />
        </Routes>
       </BrowserRouter>

    </div>
  )
}

export default App; 