import React, { useState } from 'react';

const initialFaqs = [
    { id: 1, question: 'What is an apple?', answer: 'An apple is a fruit.' },
    { id: 2, question: 'How does a chatbot work?', answer: 'It uses AI to respond.' },
];

function FAQ() {
    const [faqs, setFaqs] = useState(initialFaqs);
    const [newFaq, setNewFaq] = useState({ question: '', answer: '' });
    const [editingIndex, setEditingIndex] = useState(null); 

    // Handle adding a new FAQ
    const handleAddFaq = () => {
        if (!newFaq.question || !newFaq.answer) {
            alert('Please fill out both the question and answer fields.');
            return;
        }

        if (editingIndex !== null) {
            // If in edit mode, update the existing FAQ
            const updatedFaqs = faqs.map((faq, index) =>
                index === editingIndex ? { ...faq, ...newFaq } : faq
            );
            setFaqs(updatedFaqs);
            setEditingIndex(null); // Exit edit mode
        } else {
            // Create a new FAQ with a unique ID
            setFaqs([...faqs, { ...newFaq, id: faqs.length + 1 }]);
        }
        setNewFaq({ question: '', answer: '' });
    };

    // Handle editing an existing FAQ
    const handleEditFaq = (index) => {
        setEditingIndex(index);
        setNewFaq(faqs[index]);
    };

    // Handle deleting an FAQ
    const handleDeleteFaq = (index) => {
        if (window.confirm('Are you sure you want to delete this FAQ?')) {
            const updatedFaqs = faqs.filter((_, i) => i !== index);
            setFaqs(updatedFaqs);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-teal-400 to-purple-600">
            <div className="max-w-xl w-full bg-white rounded-lg shadow-lg p-6 h-5/6 overflow-y-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">FAQ</h1>
                <div className="mb-6">
                    {/* Input for new FAQ or editing an existing one */}
                    <input
                        type="text"
                        value={newFaq.question}
                        onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })}
                        placeholder="New Question"
                        className="border p-2 mb-2 w-full rounded"
                    />
                    <input
                        type="text"
                        value={newFaq.answer}
                        onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
                        placeholder="New Answer"
                        className="border p-2 w-full rounded"
                    />
                    <button
                        onClick={handleAddFaq}
                        className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
                    >
                        {editingIndex !== null ? 'Update FAQ' : 'Add FAQ'}
                    </button>
                </div>

                <div>
                    {faqs.map((faq, index) => (
                        <div key={faq.id} className="bg-gray-100 p-4 mb-4 rounded-lg shadow-lg">
                            <h2 className="font-bold text-gray-800">{faq.question}</h2>
                            <p className="text-gray-700">{faq.answer}</p>
                            <div className="flex space-x-4 mt-2">
                                <button
                                    onClick={() => handleEditFaq(index)}
                                    className="bg-yellow-500 text-white py-1 px-3 rounded"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDeleteFaq(index)}
                                    className="bg-red-500 text-white py-1 px-3 rounded"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FAQ;
