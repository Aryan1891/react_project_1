import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Title from "./Title";

const loggedInUser = () => {
  // API call to check authentication
  return false;
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      setIsOnline(true);
    });

    window.addEventListener("offline", () => {
      setIsOnline(false);
    });
  }, []);

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-50">
      <Title />
      <div>
        <ul className="flex items-center space-x-8 py-10">
          <li>onlineStatus: {isOnline ? "yes" : "no"}</li>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart </li>
        <li>
        {isLoggedIn ? (
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => setIsLoggedIn(false)}
          >
            Logout
          </button>
        ) : (
          <button
            className="px-4 py-2 bg-green-500 text-white rounded"
            onClick={() => setIsLoggedIn(true)}
          >
            Login
          </button>
        )}
        </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
