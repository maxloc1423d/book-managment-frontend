import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getBooks, deleteBook } from '../api/booksApi';
import BookTable from '../components/BookTable';

function HomePage() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const fetchBooks = async () => {
    const res = await getBooks();
    setBooks(res.data);
  };

  const handleDelete = async (id) => {
    await deleteBook(id);
    fetchBooks();
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="container">
      <h1>Book Inventory Management System</h1>
      <button className="add-button" onClick={() => navigate('/add')}>Add Book</button>
      <BookTable books={books} onDelete={handleDelete} />
    </div>
  );
}

export default HomePage;