import React from "react";
import Navbar from "../components/navbar.jsx";
import Banner from "../components/banner.jsx";
import Footer from "../components/footer.jsx";
import Course from "../components/Course.jsx";
import list from "../../public/list.json";

function courses() {
    // console.log(list);
  return (
    <>
      <Navbar />
    <div className="min-h-screen">
        <Course/>
    </div>
      <Footer />
    </>
  );
}

export default courses;
