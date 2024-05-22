import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-tangreen text-white py-4 px-16">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <a href="#" className="text-xl font-bold mr-2">
            BRIEF'D
          </a>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Login
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;