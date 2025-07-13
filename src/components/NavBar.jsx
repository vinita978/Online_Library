import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold">📚 Online Library</h1>
      <div className="space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'underline text-yellow-300' : 'hover:text-yellow-200'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/books"
          className={({ isActive }) =>
            isActive ? 'underline text-yellow-300' : 'hover:text-yellow-200'
          }
        >
          Browse Books
        </NavLink>
        <NavLink
          to="/add"
          className={({ isActive }) =>
            isActive ? 'underline text-yellow-300' : 'hover:text-yellow-200'
          }
        >
          Add Book
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
