import React from "react";
import { Link, replace, useLocation, useNavigate } from "react-router-dom";
import Login from "./login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";
// import { Navigate } from "react-router-dom";

function Signup() {
  const location = useLocation()
  const navigate = useNavigate()
  const from= location.state?.from?.pathname || "/"
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [authUser, setAuthUser] = useAuth();
  
  const onSubmit = async(data) => {
    const userInfo = {
      fullname:data.fullname,
      email:data.email,
      password:data.password,
    }
    await axios.post("http://localhost:3005/user/signup", userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success("Signup Successful");
        navigate(from, {replace: true});
        // to save data in local storage of browser so we can use it in frontend part to show exclusive course only signup emails
        localStorage.setItem("Users", JSON.stringify(res.data.user)); // without json.stringify it will show object, object in local storage and res.data.[user] because I just want user name and ID not message, without it there was showing extra message
        // Update auth state
        setAuthUser(res.data.user);

      } 

      //errors 
    }).catch((err)=>{
      if (err.response){
        console.log(err);
        toast.error("Error: " + err.response.data.message);
      }
    })
  }
  return (
    <>
      <div className="flex h-screen items-center justify-center ">
        <div className="w-[600px]">
          <div className="modal-box ">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Signup to see <span className="text-pink-500"> all available Courses</span></h3>
              {/* name   */}
              <div className="mt-4 space-y-2">
                <span> Name </span>
                <br />

                <input
                  type="text"
                  placeholder="Enter your name here"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("fullname", { required: true })}
                />
                <br />
                {errors.fullname && (
                  <span className="text-sm text-red-500 ">
                    This field is required
                  </span>
                )}
              </div>
              {/* email  */}
              <div className="mt-4 space-y-2">
                <span> Email </span>
                <br />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500 ">
                    This field is required
                  </span>
                )}
              </div>
              {/* password */}
              <div className="mt-4 space-y-2">
                <span> Password </span>
                <br />

                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500 ">This field is required</span>
                )}
              </div>
              {/* button */}
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 ">
                  Signup
                </button>
                {/* <p className="text-xl">
                  Have an account? {""}
                  <button
                    type="button"
                    className="underline text-blue-500 cursor-pointer "
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>{" "}
                  {""}
                  <Login />
                </p> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
