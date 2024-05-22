import React from 'react';

const SpotifyLogin = () => {
  const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const REDIRECT_URI = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
  const RESPONSE_TYPE = 'code';
  const SCOPE = 'user-read-private user-read-email';

  const loginUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=${RESPONSE_TYPE}&scope=${encodeURIComponent(SCOPE)}`;

  return (
    <div className="flex justify-center items-center min-h-screen">
      <a href={loginUrl} className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
        Login with Spotify
      </a>
    </div>
  );
};

export default SpotifyLogin;
