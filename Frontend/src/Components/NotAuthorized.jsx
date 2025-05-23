
import React from 'react';
import { Link } from 'react-router-dom';

const NotAuthorized = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-red-600 mb-4">403 - Not Authorized</h1>
      <p className="text-lg text-gray-700 mb-6">
        You do not have permission to access this page.
      </p>
      <Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotAuthorized;
