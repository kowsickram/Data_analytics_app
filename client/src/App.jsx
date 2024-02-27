import React from 'react'

// Header 
import Nav from './Headers/navbar'
import Footer from './Headers/footer'

// Page 
import Signin from './Pages/signin'
import Signup from './Pages/signup'
import Home from './Pages/home'
import Analysis from './Pages/analysis'
import Features from './Pages/features'
import Settings from './Pages/settings'

import { Routes, Route, HashRouter } from "react-router-dom";

export default function App() {
  return (
    <HashRouter>
      <Nav />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/sign-up" element={<Signup />}/>
            <Route path="/sign-in"  element={<Signin />} />
            <Route path="/analysis"  element={<Analysis />} />
            <Route path="/features" element={<Features />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
       <Footer />
    </HashRouter>
  )
}
