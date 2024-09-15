import React from 'react';

function About() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-pink-300 via-green-200 to-blue-500">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 h-3/4 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">About Fruit.ai</h1>
        <p className="text-lg text-gray-700 mb-4">
          Whether you're looking to discover new fruits, understand their nutritional values, or find the perfect fruit for your diet, our AI-powered chatbot is here to assist. We provide personalized fruit recommendations tailored to your health needs, making it easier for you to integrate the best fruits into your daily routine.
        </p>
        <button className="mt-4 py-2 px-4 bg-pink-500 text-white rounded hover:bg-pink-600">ABOUT</button>
      </div>
    </div>
  );
}

export default About;
