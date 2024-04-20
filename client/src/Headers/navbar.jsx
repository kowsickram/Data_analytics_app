import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const storedUser = JSON.parse(sessionStorage.getItem("user"));
  const [activeuser, setActiveuser] = useState("");
  useEffect(() => {
    if (storedUser) {
      axios
        .get("/api/activeuser", {
          params: { userEmail: storedUser.email },
        })
        .then((response) => {
          const username = response.data.username;
          console.log(username);
          setActiveuser(username);
        })
        .catch((error) => {
          console.error("Error fetching username:", error);
        });
    }
  }, []);
  const handleLogout = () => {
    sessionStorage.removeItem("user");
    setTimeout(() => {
      window.location.reload();
      window.location.href = "/home";
    }, 1000);
  };

  return (
    <header className="bg-transparent m-5 border border-blue-400  rounded-lg">
      <nav
        className="mx-auto flex w-full items-center justify-between p-4 lg:px-8 "
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img src="./images/llooo.svg" width={150} alt="logo"></img>
          </Link>
          {activeuser?(
                     <div className="text-blue-500 font-Croissant text-2xl  p-2 rounded-lg items-center font-normal">{activeuser}</div>
                ):null}
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <span className="text-2xl text-white">☰</span>
          </button>
        </div>
        {storedUser ? (
          <>
        <div className="hidden lg:flex lg:gap-x-12 lg:justify-center lg:items-center">
          <Link
            to="/analysis"
            className="text-sm font-Quicksand font-normal leading-6 text-white focus:font-semibold focus:text-teal-500"
          >
            Data
          </Link>
          <Link
            to="/features"
            className="text-sm font-Quicksand font-normal leading-6 text-white focus:font-semibold focus:text-teal-500"
          >
            Features
          </Link>
          <Link
            to="/settings"
            className="text-sm font-Quicksand font-normal leading-6 text-white focus:font-semibold focus:text-teal-500"
          >
            Settings
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button onClick={handleLogout} className="ml-2 rounded-lg p-2 font-Quicksand text-white bg-slate-900">Log-out</button>
        </div>
        </>
        ) : (
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <Link
            to="/sign-up"
            className="text-sm font-Quicksand font-normal leading-6 text-white focus:font-semibold focus:text-teal-500"
          >
            Sign up <span aria-hidden="true">&larr;</span>
          </Link>
        </div>
        )}
      </nav>
      {/* //Mobile menu */}
      <div
        className="fixed inset-0 z-10 bg-slate-950 opacity-50 transition-opacity lg:hidden"
        style={{
          opacity: mobileMenuOpen ? "1" : "0",
          pointerEvents: mobileMenuOpen ? "auto" : "none",
        }}
        onClick={() => setMobileMenuOpen(false)}
      ></div>
      <div
        className="lg:hidden fixed inset-y-0 right-0 z-20 w-full max-w-sm bg-slate-900 overflow-y-auto transition-transform duration-200 ease-out"
        style={{
          transform: mobileMenuOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        {/* Mobile menu content */}
        <div className="p-6">
          <button
            type="button"
            className="absolute top-4 right-4 text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            X
          </button>
          {storedUser ? (
            <>
          <Link
            to="/analysis"
            className="-mx-3 font-Quicksand block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white "
          >
            Data
          </Link>
          <Link
            to="/features"
            className="-mx-3 font-Quicksand block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white "
          >
            Features
          </Link>
          <Link
            to="/settings"
            className="-mx-3 font-Quicksand block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white"
          >
            Settings
          </Link>
          <button onClick={handleLogout} className=" rounded-lg p-2 font-Quicksand text-white bg-red-800">Log-out</button>
          </>
          ) : (
          <Link
            to="/sign-in"
            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white "
          >
            Sign in
          </Link>
          )}
        </div>
      </div>
    </header>
  );
}
