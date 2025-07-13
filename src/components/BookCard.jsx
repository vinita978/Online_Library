import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  return (
    <div className="book-card border rounded-xl p-4 shadow hover:shadow-lg transition duration-300 bg-white">
      <h2 className="text-lg font-semibold mb-1">{book.title}</h2>
      <p className="text-sm text-gray-600 mb-1">Author: {book.author}</p>
      <p className="text-sm text-gray-500 mb-2">Category: {book.category}</p>
      <p className="text-sm text-yellow-600">⭐ {book.rating || "Not Rated"}</p>
      <Link
        to={`/book/${book.id}`}
        className="inline-block mt-2 text-blue-500 hover:underline text-sm"
      >
        View Details
      </Link>
    </div>
  );
};

export default BookCard;
