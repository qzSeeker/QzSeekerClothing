import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="shadow-lg sticky z-50 top-0">
      <nav className="bg-black border-grey-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-around items-center mx-auto max-w-screen-xl">
          <Link>
            <img
              className="h-10 p-1"
              src="src\assets\png\logo-no-background.png"
              alt="logo"
            />
          </Link>

          <div className="flex flex-wrap gap-6">
            <Link to="/" className="text-white text-base">
              Home
            </Link>
            <Link to="/about" className="text-white text-base">
              About
            </Link>
            <Link to="/contact" className="text-white text-base">
              Contact
            </Link>
            <Link to="/services" className="text-white text-base">
              Services
            </Link>
          </div>

          <div className="flex items-center lg:order-2 gap-8 ">
            <Link>
              <button className="text-white">Login</button>
            </Link>
            <Link>
              <div>
                <FontAwesomeIcon
                  className="text-white fa-lg"
                  icon={faCartShopping}
                />
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
