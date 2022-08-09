import React from 'react'
import Landing from './components/pages/landing/Landing'
import Contact from './components/pages/Contact/Contact';
import AboutUs from './components/pages/AboutUs/Aboutus';
import Admission from './components/pages/Admission/Admission';
import OurTeam from './components/pages/outTeam/OurTeam';
import Blog from './components/pages/Blog/Blog';
import Enroll from './components/pages/Enroll/Enroll-1';
import Level from './components/ui/Enroll/Levels';
import Heading from './components/ui/Enroll/Heading';
import ChooseLevel from './components/ui/Enroll/Choose-level';
import ParentDetails from './components/ui/Enroll/ParentsDetails';
import EnrollParents from './components/pages/Enroll/Enroll-P'
import Adress from './components/pages/Enroll/Adress';
import {BrowserRouter , Route , Routes} from 'react-router-dom';






const App = ()=>{
  return (
    <div>
 
      <BrowserRouter>
        <Routes> 

        <Route path='/' element={<ParentDetails />} />

          <Route path="/about" element={<AboutUs/>} />
          <Route path="/admission" element={<Admission/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/team" element={<OurTeam/>} />
          <Route path="/enroll" element={<Enroll/>} />
        </Routes>
       </BrowserRouter>

    </div>
  )
}

export default App; 