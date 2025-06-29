import React from 'react';
import { useNavigate } from 'react-router-dom';

function BookTable({ books, onDelete }) {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this book?");
    if (confirmDelete) {
      onDelete(id);
    }
  };

  return (
    <div className="app-layout">
      
      <main className="main-content">
        <div className="table-page">
          <div className="table-container">
            <table className="book-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Published</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {books.map(book => (
                  <tr key={book.id}>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.publishedDate}</td>
                    <td>
                      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                        <button onClick={() => navigate(`/details/${book.id}`)}>View</button>
                        <button onClick={() => navigate(`/edit/${book.id}`)}>Edit</button>
                        <button onClick={() => handleDelete(book.id)}>Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <footer ></footer>
    </div>
  );
}

export default BookTable;
