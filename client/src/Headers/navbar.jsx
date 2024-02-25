import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className=" bg-slate-800 m-5  rounded-lg">
      <nav className="mx-auto flex w-full items-center justify-between p-6 lg:px-8 " aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img src='./images/llooo.svg' width={150} alt='logo'></img>
          </Link>
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
        <div className="hidden lg:flex lg:gap-x-12">
          <Link to="/analysis" className="text-sm font-normal leading-6 text-white focus:font-semibold focus:text-teal-500">Data-Analytics</Link>
          <Link to="/features" className="text-sm font-normal leading-6 text-white focus:font-semibold focus:text-teal-500">Features</Link>
          <Link to="/settings" className="text-sm font-normal leading-6 text-white focus:font-semibold focus:text-teal-500">Settings</Link>
          <Link to="/sign-up" className="text-sm font-normal leading-6 text-white focus:font-semibold focus:text-teal-500">Sign up <span aria-hidden="true">&larr;</span></Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="/sign-in" className="text-sm font-semibold leading-6 text-white focus:font-semibold focus:text-teal-500">Sign in <span aria-hidden="true">&rarr;</span></Link>
        </div>
      </nav>
      {/* Mobile menu */}
      <div className="fixed inset-0 z-10 bg-slate-950 opacity-50 transition-opacity lg:hidden" style={{opacity: mobileMenuOpen ? '1' : '0', pointerEvents: mobileMenuOpen ? 'auto' : 'none'}} onClick={() => setMobileMenuOpen(false)}></div>
      <div className="lg:hidden fixed inset-y-0 right-0 z-20 w-full max-w-sm bg-slate-900 overflow-y-auto transition-transform duration-200 ease-out" style={{transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)'}}>
        {/* Mobile menu content */}
        <div className="p-6">
          <button
            type="button"
            className="absolute top-4 right-4 text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            X
          </button>
          <Link to="/analysis" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-slate-400">Data-Analytics</Link>
          <Link to="/features" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-slate-400">Features</Link>
          <Link to="/settings" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-slate-400">Settings</Link>
          <Link to="/sign-in" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-slate-400">Sign in</Link>
        </div>
      </div>
    </header>
  );
}
