import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-400 to-cyan-400 relative">
      <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-20 blur-lg rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white opacity-20 blur-lg rounded-full"></div>
      <div className="max-w-4xl w-full bg-gradient-to-r from-green-300 to-red-300 rounded-lg shadow-lg p-6 h-3/4 overflow-y-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Fruit.Ai</h1>
          <p className="text-lg text-gray-600">"Be Healthy!"</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link to="/chatbot" className="bg-white p-4 rounded-lg shadow-lg text-center hover:scale-105 transition duration-300 ease-in-out">
            <h2 className="text-xl font-bold text-purple-500">Chat</h2>
            <p className="text-gray-600">Interact with our AI chatbot</p>
          </Link>
          <Link to="/translator" className="bg-white p-4 rounded-lg shadow-lg text-center hover:scale-105 transition duration-300 ease-in-out">
            <h2 className="text-xl font-bold text-blue-500">Translate</h2>
            <p className="text-gray-600">Translate text between languages</p>
          </Link>
          <Link to="/faq" className="bg-white p-4 rounded-lg shadow-lg text-center hover:scale-105 transition duration-300 ease-in-out">
            <h2 className="text-xl font-bold text-yellow-500">FAQs</h2>
            <p className="text-gray-600">Find answers to common questions</p>
          </Link>
          <Link to="/about" className="bg-white p-4 rounded-lg shadow-lg text-center hover:scale-105 transition duration-300 ease-in-out">
            <h2 className="text-xl font-bold text-pink-500">About</h2>
            <p className="text-gray-600">Learn more about Fruit.Ai</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
