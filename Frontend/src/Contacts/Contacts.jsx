import React from 'react'
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import Contact from "../components/Contact.jsx";

function contact() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen">
    <Contact/>
    </div>
    <Footer/>
    </>
  )
}

export default contact
