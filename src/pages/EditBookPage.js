import React, { useEffect, useState } from 'react';
import BookForm from '../components/BookForm';
import { getBook, updateBook } from '../api/booksApi';
import { useParams, useNavigate } from 'react-router-dom';

function EditBookPage() {
  const { id } = useParams();
  const [initialValues, setInitialValues] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getBook(id).then(res => setInitialValues(res.data));
  }, [id]);

  const handleSubmit = async (values) => {
    await updateBook(id, values);
    navigate('/');
  };

  if (!initialValues) return <div>Loading...</div>;

  return (
    <div className="form-container">
      <h2>Edit Book</h2>
      <BookForm initialValues={initialValues} onSubmit={handleSubmit} />
    </div>
  );
}

export default EditBookPage;