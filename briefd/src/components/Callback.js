import React, { useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Callback = () => {
  const history = useHistory();

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

      // Redirect to the home page or another page
      history.push('/');
    };

    const search = window.location.search;
    const params = new URLSearchParams(search);
    const code = params.get('code');

    if (code) {
      getToken(code);
    }
  }, [history]);

  return <div>Loading...</div>;
};

export default Callback;
