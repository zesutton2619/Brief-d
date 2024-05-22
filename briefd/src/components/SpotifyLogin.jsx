import React from 'react';

const SpotifyLogin = () => {
  const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const REDIRECT_URI = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
  const RESPONSE_TYPE = 'code';
  const SCOPE = 'user-read-private user-read-email';

  const loginUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
    REDIRECT_URI
  )}&response_type=${RESPONSE_TYPE}&scope=${encodeURIComponent(SCOPE)}`;

  const handleLogin = () => {
    window.location.href = loginUrl;
  };

  return (
    <button
      className="text-lg font-semibold px-4 py-2 rounded border"
      onClick={handleLogin}
    >
      Login
    </button>
  );
};

export default SpotifyLogin;