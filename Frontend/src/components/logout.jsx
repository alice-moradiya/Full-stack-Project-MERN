import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logged out successfully!");
      // timeout so that toast pop up will be visible
      setTimeout(() => {
        // reload after login so  logout button updates
        window.location.reload();
        // to save data in local storage of browser so we can use it in frontend part to show exclusive course only signup emails
      }, 2000);
    } catch (error) {
      toast.error("Error" + error);
      setTimeout(() => {}, 3000);
    }
  };

  return (
    <div>
      <button
        className="p-3 py-2 bg-red-500 text-white rounded-md cursor-pointer hover:bg-red-600 duration-300"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
