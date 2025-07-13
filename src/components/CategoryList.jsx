import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  'Fiction',
  'Non-Fiction',
  'Science Fiction',
  'Biography',
  'Fantasy',
  'Mystery',
  'Romance',
];

const CategoryList = () => {
  return (
    <div className="category-list grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      {categories.map((category) => (
        <Link
          key={category}
          to={`/books/${category.toLowerCase().replace(/\s/g, '-')}`}
          className="block text-center bg-blue-100 text-blue-800 font-medium py-2 px-4 rounded-lg hover:bg-blue-200 transition"
        >
          {category}
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
