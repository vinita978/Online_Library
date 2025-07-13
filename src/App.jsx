import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from "./Pages/Home"
import BrowseBooks from './Pages/BrowserBooks';
import AddBook from "./Pages/AddBook";
import BookDetails from './Pages/BookDetail';
import NotFound from './components/NotFound';

// Layout
import Navbar from "./components/NavBar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BrowseBooks />} />
          <Route path="/books/:category" element={<BrowseBooks />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
