import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SearchPage() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://book-manament-backend.onrender.com/books')
      .then(res => setBooks(res.data))
      .catch(err => console.error('Failed to fetch books:', err));
  }, []);

  const handleSearch = () => {
    const filtered = books.filter(book =>
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div className="page-container">
      <h2>Search Book</h2>
      <input
        type="text"
        placeholder="Enter title or author"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {results.length > 0 ? (
        <ul>
          {results.map(book => (
            <li key={book.id}>
              {book.title} by {book.author}
              <button style={{ marginLeft: '10px' , backgroundColor: 'black' }} onClick={() => navigate(`/details/${book.id}`)}>
                View Book
              </button>
            </li>
          ))}
        </ul>
      ) : query && (
        <p>No matching books found.</p>
      )}
    </div>
  );
}

export default SearchPage;