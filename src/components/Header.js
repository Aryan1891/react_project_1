import { useState } from "react";


import { Link } from "react-router-dom";

import Title from "./Title";
const loggedInUser = () => {

  // API call to check authentication

  return false;

};

// SPA - Single Page Application???

// Client Side Routing





const Header = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (

    <div className="header">

      <Title />

      <div className="nav-items">

        <ul>
          
          <li>
            <Link to="/">Home </Link>
          </li> 
          
          <li><Link to="/about">
           About 
          </Link></li>
          <li>
            <Link to="/contact">
            Contact
          </Link> 
          </li>
          <li>Cart </li>
        </ul>

      </div>

      {isLoggedIn ? (

        <button onClick={() => setIsLoggedIn(false)}>Logout</button>

      ) : (

        <button onClick={() => setIsLoggedIn(true)}>Login</button>

      )}

    </div>

  );

};

export default Header;