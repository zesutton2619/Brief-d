import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import Header from '../components/Header';

const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="min-h-screen bg-tan flex flex-col justify-center items-center">
        <Header />
      <h1 className="text-3xl font-bold">Welcome to the Dashboard</h1>
      {user ? (
        <div>
          <p className="text-gray-600">Logged in as: {user.display_name}</p>
          <p className="text-gray-600">Email: {user.email}</p>
          <img src={user?.images?.[0]?.url || 'default-profile-picture.jpg'} alt="Profile" />
        </div>
      ) : (
        <p className="text-gray-600">Loading user information...</p>
      )}
    </div>
  );
};

export default Dashboard;
