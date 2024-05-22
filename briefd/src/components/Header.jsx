import React from 'react';
import SpotifyLogin from './SpotifyLogin';
import SpotifyLogout from './SpotifyLogout';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-tangreen text-white py-4 px-16">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <button
            onClick={() => handleNavigate('/')}
            className="text-xl font-bold mr-2"
          >
            BRIEF'D
          </button>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <button
                onClick={() => handleNavigate('/')}
                className="text-lg font-semibold px-4 py-2 rounded border"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigate('/')}
                className="text-lg font-semibold px-4 py-2 rounded border"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigate('/dashboard')}
                className="text-lg font-semibold px-4 py-2 rounded border"
              >
                Dashboard
              </button>
            </li>
            <li>
              <SpotifyLogin />
            </li>
            <li>
              <SpotifyLogout />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;