import React from 'react';
import Header from '../components/Header';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-tan flex flex-col justify-top">
      <Header />
      <div className="w-1/4 h-64 bg-white shadow-lg rounded-lg ml-8 mt-24">
        <h1 className="text-3xl font-bold text-center mb-4">Projey Website</h1>
        <p className="text-gray-600 font-Nipsey text-center"> • Track1.</p>
        <p className='text-gray-600 text-center'> • Track2.</p>
        <p className='text-gray-600 text-center'> • Track3.</p>
        <p className='text-gray-600 text-center'> • Track4.</p>
        <p className='text-gray-600 text-center'> • Track5.</p>
      </div>
    </div>
  );
};

export default LandingPage;