import React from 'react'


import Header from './components/ui/Header/Header';
import  Footer from './components/ui/Footer'
import Landing from './components/pages/landing/Landing'


const App = ()=>{
  return (
    <div>
      <Header />
      <Landing></Landing>
      <Footer></Footer>
    </div>
  )
}

export default App; 