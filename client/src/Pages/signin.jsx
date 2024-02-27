import React, { useState, useEffect } from "react";
import axios from "axios";
import Preloader from "../Components/Preloader";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  function HandleSignin(event) {
    event.preventDefault();
    // Validate email
    let emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      alert("Invalid Email");
      return;
    }

    // Validate password
    let passregex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}/;
    if (password.length < 8) {
      alert("Enter 8 Characters");
      return;
    } else if (!passregex.test(password)) {
      alert("Strong Password Required");
      return;
    }

    // Send POST request to create a new user
    axios
      .post("/api/signin", {
        email,
        password,
      })
      .then((response) => {
        if (response.data && response.data.success) {
          toast.success("Login Successfully");
          const user = { email, password };

          sessionStorage.setItem("user", JSON.stringify(user));
          setTimeout(() => {
            window.location.reload();
            window.location.href = "/home";
          }, 1000);
        } else {
          alert("An error occurred while logging in");
        }
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        alert("Inernal Server Error");
      });
  }

  return (
    <>
      <ToastContainer
        position="bottom-right"
        theme="dark"
        draggable
        autoClose={5000}
      />
      {loading ? (
        <Preloader />
      ) : (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-light leading-9 tracking-tight text-white">
              Sign-In to Explore
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-normal leading-6 text-white"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="@gmail.com"
                    onChange={(event) => setEmail(event.target.value)}
                    className="w-full bg-gray-800 text-white border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-normal leading-6 text-white"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <Link
                      to="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="************"
                    autoComplete="current-password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                    className="w-full bg-gray-800 text-white border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <button
                  onClick={HandleSignin}
                  type="submit"
                  className="w-full text-center bg-slate-900 text-white font-normal p-2 rounded-md hover:bg-slate-900 focus:outline-none  mb-4"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Not yet a user?{" "}
              <Link
                to="/sign-up"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
