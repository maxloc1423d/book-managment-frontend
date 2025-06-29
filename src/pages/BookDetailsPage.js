import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBook } from '../api/booksApi';

function BookDetailsPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getBook(id).then(res => setBook(res.data));
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div className="details-container">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Publisher:</strong> {book.publisher}</p>
      <p><strong>Published Date:</strong> {book.publishedDate}</p>
      <p><strong>Email:</strong> {book.email}</p>
      <p><strong>Age Group:</strong> {book.age}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <button onClick={() => navigate('/')}>Back</button>
    </div>
  );
}

export default BookDetailsPage;