import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const SpotifyLogout = () => {
    const { setUser } = useContext(UserContext);

    const handleLogout = () => {
    localStorage.removeItem('spotify_token');
    setUser(null); // Clear the user data from the context
    console.log("Logged Out")
    };

    return (
        <button 
            className="text-lg font-semibold px-4 py-2 rounded border"
            onClick={handleLogout}>Logout
        </button>
    );

};

export default SpotifyLogout