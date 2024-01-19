import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faBars,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

function Header() {

  const menuBar = () => {
    
  }

  return (
    <>
      <div className="bg-black w-full">
        <h1 className="text-white text-sm text-center py-2 tracking-wide uppercase">
          Earlybird Offer Starting Soon &nbsp;
          <FontAwesomeIcon icon={faArrowDown} />
        </h1>
      </div>
      <header className="shadow-lg sticky z-60 top-0">
        <nav className="bg-white border-grey-200 px-4 lg:px-6 py-3.5">
          <div className="absolute cursor-pointer sm:hidden">
            <FontAwesomeIcon icon={faBars} onClick={menuBar}/>
          </div>
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link>
              <img
                className="h-6 p-1 ml-8"
                src="src\assets\qzseekerclothing-logo-zip-file\png\logo-no-background.png"
                alt="logo"
              />
            </Link>

            <div className="flex-wrap gap-6 uppercase hidden sm:flex">
              <Link to="/" className="text-black text-sm tracking-widest">
                Home
              </Link>
              <Link to="/about" className="text-black text-sm tracking-widest">
                About us
              </Link>
              <Link
                to="/contact"
                className="text-black text-sm tracking-widest"
              >
                Contact us
              </Link>
              <Link
                to="/collection"
                className="text-black text-sm tracking-widest"
              >
                Collections
              </Link>
            </div>

            <div className="flex items-center lg:order-2 gap-8 ">
              <Link to="/login">
                <button className="text-black hidden md:block">Login</button>
              </Link>
              <div className="flex flex-wrap gap-3">
                <Link to="/serach">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Link>
                <Link to="/cart">
                  <FontAwesomeIcon
                    className="text-black fa-lg"
                    icon={faCartShopping}
                  />
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
