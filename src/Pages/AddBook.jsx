import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/bookSlice';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    rating: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { title, author, category, description, rating } = formData;
    if (!title || !author || !category || !description || !rating) {
      setError('Please fill in all fields.');
      return;
    }

    const newBook = {
      id: Date.now(),
      ...formData,
      category: category.toLowerCase().replace(/\s/g, '-'), // format URL-friendly
      rating: parseFloat(rating),
    };

    dispatch(addBook(newBook));
    navigate('/books');
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Add a New Book</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border border-gray-300 px-3 py-2 rounded"
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          className="w-full border border-gray-300 px-3 py-2 rounded"
        />
        <input
          type="text"
          name="category"
          placeholder="Category (e.g., Fiction, Biography)"
          value={formData.category}
          onChange={handleChange}
          className="w-full border border-gray-300 px-3 py-2 rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border border-gray-300 px-3 py-2 rounded"
        ></textarea>
        <input
          type="number"
          name="rating"
          placeholder="Rating (1-5)"
          step="0.1"
          min="0"
          max="5"
          value={formData.rating}
          onChange={handleChange}
          className="w-full border border-gray-300 px-3 py-2 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
