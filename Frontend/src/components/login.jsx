import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [authUser, setAuthUser] = useAuth();
  
  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:3005/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          //toast to make login ui better
          toast.success("Login Successfully");
          // to save data in local storage of browser so we can use it in frontend part to show exclusive course only signup emails
          localStorage.setItem("Users", JSON.stringify(res.data.user)); // without json.stringify it will show object, object in local storage and res.data.[user] because I just want user name and ID not message, without it there was showing extra message
          // Update auth state
          setAuthUser(res.data.user);
          // Close modal after successful login
          document.getElementById("my_modal_3").close();
        }

        //errors
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
          // timout to show error popup, otherwise it is not showing
          setTimeout(() => {},2000);
        }
      });
  };
  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById("my_modal_3").close()}
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Login</h3>
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
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* button */}
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 ">
                  Login
                </button>
                <p>
                  Not registered?{" "}
                  <Link
                    to="/Signup"
                    className="underline text-blue-500 cursor-pointer "
                  >
                    Signup
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
