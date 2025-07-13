import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BookCard from '../components/BookCard';
import SearchBar from '../components/SearchBar';

const BrowseBooks = () => {
  const { category } = useParams(); // URL param (e.g., /books/fiction)
  const books = useSelector((state) => state.books);
  const [searchTerm, setSearchTerm] = useState('');

  // Normalize search term
  const lowerSearch = searchTerm.toLowerCase();

  // Filter books by category (if category is in URL)
  const filteredBooks = books
    .filter((book) =>
      category
        ? book.category.toLowerCase() === category.toLowerCase()
        : true
    )
    .filter(
      (book) =>
        book.title.toLowerCase().includes(lowerSearch) ||
        book.author.toLowerCase().includes(lowerSearch)
    );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Browse Books</h2>
      <SearchBar onSearch={setSearchTerm} />
      {filteredBooks.length === 0 ? (
        <p className="text-red-500 mt-6">No books found.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowseBooks;
