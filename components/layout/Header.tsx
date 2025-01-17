import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-10 h-10 mr-2"
          />
          <span className="text-xl font-semibold text-gray-800">Find Your Stay</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-4">
          <input
            type="text"
            placeholder="Search for properties..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Sign In/Sign Up */}
        <div className="flex space-x-4">
          <button className="text-gray-600 hover:text-blue-500">Sign In</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Sign Up
          </button>
        </div>
      </div>

      {/* Accommodation Types */}
      <div className="mt-4 border-t pt-4">
        <nav className="flex justify-center space-x-6 text-gray-600">
          <button className="hover:text-blue-500">Rooms</button>
          <button className="hover:text-blue-500">Mansions</button>
          <button className="hover:text-blue-500">Countryside</button>
          <button className="hover:text-blue-500">Beachfront</button>
          <button className="hover:text-blue-500">Luxury Villas</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;