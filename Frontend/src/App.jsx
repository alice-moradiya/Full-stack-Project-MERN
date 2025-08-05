import React from "react";
import Home from "./Home/home";
import Courses from "./Courses/courses.jsx";
import Signup from "./components/Signup.jsx";
import Contact from "./Contacts/Contacts.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className=" dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/courses"
            // adding authentication for course, opens only if user is signed up otherwise signup page
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Contacts" element={<Contact />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
