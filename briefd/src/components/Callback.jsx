import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Callback = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    const getToken = async (code) => {
      const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
      const CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
      const REDIRECT_URI = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;

      const response = await axios.post('https://accounts.spotify.com/api/token', null, {
        params: {
          grant_type: 'authorization_code',
          code: code,
          redirect_uri: REDIRECT_URI,
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      const { access_token } = response.data;
      localStorage.setItem('spotify_token', access_token);

      // Fetch user data from Spotify
      const userResponse = await axios.get('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      // Store user data in context
      setUser(userResponse.data);

      // Redirect to the dashboard page
      navigate('/dashboard');
    };

    const search = window.location.search;
    const params = new URLSearchParams(search);
    const code = params.get('code');

    if (code) {
      getToken(code);
    }
  }, [navigate, setUser]);

  return <div>Loading...</div>;
};

export default Callback;
