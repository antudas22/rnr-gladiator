import React from "react";
import { Link } from "react-router-dom";
import rnrLogo from "../../../assets/rnr-logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="mb-2">
              <Link to='/'>Home</Link>
            </li>
            <li className="mb-2">
              <Link to=''>About Us</Link>
            </li>
            <li className="mb-2">
              <Link to=''>Contact Us</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </ul>
        </div>
        <Link to="/">
          <img width={"75px"} src={rnrLogo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="mr-2">
            <Link to='/'>Home</Link>
          </li>
          <li className="mr-2">
            <Link to=''>About Us</Link>
          </li>
          <li className="mr-2">
            <Link to=''>Contact Us</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
