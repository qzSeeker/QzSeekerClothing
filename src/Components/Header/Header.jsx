import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLight } from '@fortawesome/fontawesome-svg-core'
function Header() {
  return (
    <header className="w-full h-16 bg-black shadow sticky z-50 top-0">
      <nav>
        <div>
            <Link>
                <img className="mr-3 h-12" src="src\assets\png\logo-no-background.png" alt="logo"/>
            </Link>

            <div className="">
                <Link>
                    <button>Login</button>
                </Link>
                <Link>
                    <div>
                    <FontAwesomeIcon className="text-white" icon="fa-light fa-cart-shopping" />
                    </div>
                </Link>
            </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
