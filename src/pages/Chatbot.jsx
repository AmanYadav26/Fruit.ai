import React, { useState, useEffect } from 'react';

function Chatbot() {
  const [fruits, setFruits] = useState([]); // State for storing fetched fruits
  const [selectedFruit, setSelectedFruit] = useState(null); // Selected fruit details
  const [loading, setLoading] = useState(true); // Loading state for API call
  const [error, setError] = useState(null); // Error state for handling API errors
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Welcome! Here is a list of fruits you can explore.' }
  ]);

  // Fetch fruits from a local or mock API on component mount
  useEffect(() => {
    const fetchFruits = async () => {
      try {
        // Simulating an API call to fetch fruits data
        const fruitData = [
          { id: 1, name: 'Apple', family: 'Rosaceae', order: 'Rosales', description: 'Apples are nutritious fruits with a sweet or tart flavor, often eaten raw or used in cooking and baking.' },
          { id: 2, name: 'Banana', family: 'Musaceae', order: 'Zingiberales', description: 'Bananas are elongated, edible fruits known for their soft, sweet flesh and high potassium content.' },
          { id: 3, name: 'Orange', family: 'Rutaceae', order: 'Sapindales', description: 'Oranges are citrus fruits known for their juicy, tangy flavor and high vitamin C content.' },
          { id: 4, name: 'Strawberry', family: 'Rosaceae', order: 'Rosales', description: 'Strawberries are red, juicy fruits with a sweet taste, commonly used in desserts and jams.' },
          { id: 5, name: 'Pineapple', family: 'Bromeliaceae', order: 'Poales', description: 'Pineapples are tropical fruits with a sweet and tangy flavor, known for their spiky skin and juicy interior.' },
        ];

        setFruits(fruitData); // Set fruits state with the fetched data
        setLoading(false); // Set loading to false after fetching
      } catch (err) {
        setError('Failed to fetch fruit information.');
        setLoading(false);
      }
    };

    fetchFruits();
  }, []);

  // Function to handle selecting a fruit
  const handleFruitSelect = (fruit) => {
    setSelectedFruit(fruit);
    setMessages((prevMessages) => [
      ...prevMessages, 
      { sender: 'bot', text: `You selected: ${fruit.name}. This fruit belongs to the ${fruit.family} family.` }
    ]);
  };

  // Function to return back to the list of fruits
  const handleBack = () => {
    setSelectedFruit(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 p-6 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <p className="text-2xl font-bold text-gray-700">Loading fruits...</p>
          <p className="mt-2 text-gray-500">Please hang tight, you're doing great!</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-red-400 to-pink-500 p-6 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <p className="text-2xl font-bold text-gray-700">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-300 via-red-300 to-pink-300 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-8 text-white shadow-lg">Chat with Fruit.ai Bot</h1>

      <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-lg flex flex-col flex-grow">
        <div className="h-80 overflow-y-auto mb-4 p-4 border rounded-lg flex-grow bg-gradient-to-r from-green-200 to-yellow-200">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
            >
              <p className={`inline-block p-3 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
                {message.text}
              </p>
            </div>
          ))}

          {/* Display Fruit List or Fruit Details */}
          {!selectedFruit ? (
            <div className="grid grid-cols-2 gap-4">
              {fruits.map((fruit) => (
                <div
                  key={fruit.id}
                  className="p-4 bg-gradient-to-r from-green-300 to-blue-300 rounded-lg shadow-lg text-center cursor-pointer hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-400 transition duration-300"
                  onClick={() => handleFruitSelect(fruit)}
                >
                  <h2 className="text-xl font-bold text-gray-800">{fruit.name}</h2>
                  <p className="text-gray-600">{fruit.family} Family</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4 bg-white rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800">{selectedFruit.name}</h2>
              <p className="text-gray-600"><strong>Family:</strong> {selectedFruit.family}</p>
              <p className="text-gray-600"><strong>Order:</strong> {selectedFruit.order}</p>
              <p className="text-gray-600 mt-2"><strong>Description:</strong> {selectedFruit.description}</p>
              <button onClick={handleBack} className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">Back to Fruits</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
