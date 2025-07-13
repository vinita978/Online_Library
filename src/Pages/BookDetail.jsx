import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetails = () => {
  const { id } = useParams();
  const book = useSelector((state) =>
    state.books.find((b) => b.id === parseInt(id))
  );

  if (!book) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-semibold text-red-500">Book not found.</h2>
        <Link to="/books" className="text-blue-500 underline mt-4 block">
          Back to Browse
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded mt-8">
      <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
      <h2 className="text-lg text-gray-700 mb-2">By {book.author}</h2>
      <p className="text-sm text-gray-500 mb-2">
        Category: <span className="capitalize">{book.category.replace('-', ' ')}</span>
      </p>
      <p className="mb-4 text-gray-800">{book.description}</p>
      <p className="mb-4 font-semibold text-yellow-600">⭐ Rating: {book.rating}/5</p>
      <Link
        to="/books"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Back to Browse
      </Link>
    </div>
  );
};

export default BookDetails;
