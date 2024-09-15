import React, { useState } from 'react';

function Translator() {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Replace with your actual Google Translate API key
  const API_KEY = 'YOUR_GOOGLE_TRANSLATE_API_KEY';

  const handleTranslate = async () => {
    if (!text) {
      setError('Please enter text to translate.');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch(
        `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            q: text,
            target: 'hi', // You can dynamically change this to other languages
          }),
        }
      );
      const data = await response.json();
      setTranslatedText(data.data.translations[0].translatedText);
    } catch (err) {
      setError('Failed to translate. Please try again later.');
    }
    
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-pink-300 via-green-200 to-blue-500">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 h-3/4 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Translator</h1>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text to translate"
          className="border p-2 w-full mb-4 rounded"
        />
        <button
          onClick={handleTranslate}
          className="bg-blue-500 text-white py-2 px-4 rounded"
          disabled={loading}
        >
          {loading ? 'Translating...' : 'Translate'}
        </button>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        {translatedText && (
          <div className="mt-4 bg-gray-100 p-4 rounded shadow-lg">
            <p><strong>Translated Text:</strong></p>
            <p>{translatedText}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Translator;
