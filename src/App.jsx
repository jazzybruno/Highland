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
import MotherDetails from './components/ui/Enroll/MotherDetails';
import FatherDetails from './components/ui/Enroll/FatherDetails';
import EnrollMother from './components/pages/Enroll/Enroll-P'
import EnrollFather from './components/pages/Enroll/Enroll-F'
import Adress from './components/pages/Enroll/Adress';
import Register from './components/pages/Enroll/Enroll-R';
import EnrollStudent from './components/pages/Enroll/Enroll-S'
import EnrollForm from './components/pages/Enroll/Enroll-MS';
import {BrowserRouter , Route , Routes} from 'react-router-dom';



const App = ()=>{
  return (  
    <div>
 
      <BrowserRouter>
        <Routes> 

        {/* <Route path='/admission/enroll' element={<ParentDetails />} /> */}

        <Route path="/" element={<Landing/>} />

          <Route path="/about" element={<AboutUs/>} />
          <Route path="/admission" element={<Admission/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/team" element={<OurTeam/>} />
          <Route path="/enroll" element={<Enroll/>} />
        <Route path="/" element={<Landing/>} />
          <Route path="/enroll" element={<Enroll />} />
          <Route path="/enrollstudent" element={<EnrollStudent />} />
          <Route path="/enrollper" element={<EnrollForm />} />
          <Route path="/enrollad" element={<Adress />} />
          <Route path="/enrollfa" element={<EnrollFather />} />
          <Route path="/enrollmo" element={<EnrollMother />} />
          <Route path="/enrollreg" element={<Register/>} />

        </Routes>
       </BrowserRouter>

    </div>
  )
}

export default App; 