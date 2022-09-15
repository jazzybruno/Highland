import React from "react";
import Landing from "./components/pages/landing/Landing";
import Contact from "./components/pages/Contact/Contact";
import AboutUs from "./components/pages/AboutUs/Aboutus";
import Admission from "./components/pages/Admission/Admission";
import OurTeam from "./components/pages/OurTeam/OurTeam";
import Blog from "./components/pages/Blog/Blog";
import Enroll from "./components/pages/Enroll/Enroll-1";
import Level from "./components/ui/Enroll/Levels";
import Heading from "./components/ui/Enroll/Heading";
import ChooseLevel from "./components/ui/Enroll/Choose-level";
import MotherDetails from "./components/ui/Enroll/MotherDetails";
import FatherDetails from "./components/ui/Enroll/FatherDetails";
import EnrollMother from "./components/pages/Enroll/Enroll-P";
import EnrollFather from "./components/pages/Enroll/Enroll-F";
import Adress from "./components/pages/Enroll/Adress";
import Register from "./components/pages/Enroll/Enroll-R";
import EnrollStudent from "./components/pages/Enroll/Enroll-S";
import EnrollForm from "./components/pages/Enroll/Enroll-MS";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/ui/Navbar/Navbar";
import Forms from './components/pages/Auth/forms/forms';
import Home from './components/pages/Auth/pages/Home/Home';
import Post from './components/pages/Auth/pages/Posts/Posts';
import NewPost from './components/pages/Auth/pages/Posts/newPost';
import Contact1 from './components/pages/Auth/pages/Contact/contact';
import ProtectedRoutes from "./protectedRoutes";
import logo from "./components/images/About/logo.svg"
import { ColorRing } from "react-loader-spinner";
import Admissions from "./components/pages/Auth/pages/Admission/Admissions";
import DetailedAdmission from "./components/pages/Auth/pages/Admission/DetailedAdmission";
import './App.css'


const App = () => {
  const isLogged = ProtectedRoutes()
  const [isLoaded , setIsLoaded] = React.useState(false)
  window.addEventListener('load', () => {
    console.log("Hello World");
    setIsLoaded(true)
  })

  return (
    <div>
      {isLoaded ? <BrowserRouter>
        <Routes>
          {/* <Route path='/admission/enroll' element={<ParentDetails />} /> */}
          <Route path="/" element={<Landing/>}></Route>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/enroll" element={<Enroll />} />
          <Route path="/enrollstudent" element={<EnrollStudent />} />
          <Route path="/enrollper" element={<EnrollForm />} />
          <Route path="/enrollad" element={<Adress />} />
          <Route path="/enrollfa" element={<EnrollFather />} />
          <Route path="/enrollmo" element={<EnrollMother />} />
          <Route path="/enrollreg" element={<Register />} />
          <Route path="/login" element={<Forms />} />
         <Route path="/admit" element={<DetailedAdmission />}></Route>

          {/* the protected routes  */}
          <Route path="/home" element={isLogged ? <Home /> : <Forms />} />
          <Route path="/posts" element={isLogged ? <Post /> : <Forms />}></Route>
          <Route path="/post/create" element={isLogged ? <NewPost /> : <Forms />}></Route>
          <Route path="/messages" element={isLogged ? <Contact1 /> : <Forms />}></Route>
          <Route path="/Admissions"  element={isLogged ? <Admissions /> : <Forms />}></Route>
          
          {/* the protected routes  */}

        </Routes>
      </BrowserRouter> : <div className="loader-to-bring-images">
      <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#3148a3' , '#3148a3' , '#3148a3' , '#3148a3' , '#3148a3' ,  ]}
/>
      </div>}
      
      
    </div>
  );
};

export default App;
