import React from "react";
import Home from "./Home/home";
import Courses from "./Courses/courses.jsx";
import Signup from "./components/Signup.jsx";
import Contact from "./Contacts/Contacts.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>

      <div className=" dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Contacts" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
