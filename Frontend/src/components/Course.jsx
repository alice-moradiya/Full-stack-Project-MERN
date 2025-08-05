import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import {Link} from "react-router-dom"
import axios from "axios";

function Course() {
  const [book,setBook]= useState([])
  useEffect(() =>{
    const getBook = async () => {
      try {
        const res =  await axios.get("http://localhost:3005/book") //postman get req 
        console.log(res.data)
        setBook(res.data)
      }catch (error) {
        console.log("Error: ",error);
      }
    }
    getBook();
  },[])
  return (
    <>
      <div className="max-w-screen-2xl  container mx-auto md:px-20 px-4">
        <div className="mt-20 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            {" "}
            We're Delighted to have you{" "}
            <span className="text-pink-500"> here! :)</span>{" "}
          </h1>
          <p className="mt-4">
            Explore our comprehensive courses designed to empower your learning
            journey. Whether you're a beginner or looking to deepen your
            expertise, our curriculum is crafted to provide practical,
            real-world skills. From foundational principles to advanced
            techniques, our courses are led by experienced instructors who guide
            you every step of the way. Gain hands-on experience, work on real
            projects, and stay ahead in the rapidly evolving world of
            technology. Join us today, and take the next step in achieving your
            professional goals!
          </p>
          <Link to="/">
            {" "}
            <button className="bg-pink-500 text-white mt-6 px-4 py-2  rounded hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
