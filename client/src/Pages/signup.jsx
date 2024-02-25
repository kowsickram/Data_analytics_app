import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Preloader from "../Components/Preloader";
export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  function handleSignUp(event) {
    event.preventDefault();
    let nameRegex = /^[a-zA-Z]+$/;
    if (!nameRegex.test(username)) {
      alert("Name can only contain alphabets");

      return;
    }
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

    const newUser = {
      username: username,
      password: password,
      email: email,
    };
    axios
      .post("/api/signup", { username, password, email })
      .then((response) => {
        if (response.data && response.data.success) {
          const user = { email, password };
          sessionStorage.setItem("user", JSON.stringify(user));
          // window.location.reload();
          // window.location.href= "/home";
        } else {
          // Handle unsuccessful response here, such as displaying an error message
        }
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });

    alert("Sign Up Successfully");
  }

  const isFormValid = username && email && password;

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8B  ">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className=" text-center text-2xl font-light leading-9 tracking-tight text-white">
              Sign-Up to Get Started
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-normal leading-6 text-white"
                >
                  User Name
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    required
                    className="w-full bg-gray-800 text-white border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
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
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
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
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
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
                  onClick={handleSignUp}
                  type="submit"
                  className=" w-full text-center bg-slate-900 text-white font-normal p-2 rounded-md hover:bg-slate-900 focus:outline-none  mb-4"
                >
                  Sign Up
                </button>
              </div>
            </form>

            <p className=" text-center text-sm text-gray-500">
              Already a User?{" "}
              <Link
                to="/sign-in"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Sign-in
              </Link>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
