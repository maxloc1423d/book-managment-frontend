import React from 'react';
import BookForm from '../components/BookForm';
import { createBook } from '../api/booksApi';
import { useNavigate } from 'react-router-dom';

function AddBookPage() {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    await createBook(values);
    navigate('/');
  };

  return (
    <div className="form-container">
      <h2>Add Book</h2>
      <BookForm onSubmit={handleSubmit} />
    </div>
  );
}

export default AddBookPage;