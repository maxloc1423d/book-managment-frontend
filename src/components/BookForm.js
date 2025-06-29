import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

function BookForm({ initialValues = {
  title: '',
  author: '',
  publisher: '',
  publishedDate: '',
  email: '',
  age: '',
  description: '',
}, onSubmit }) {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: Yup.object({
      title: Yup.string().required('Required'),
      author: Yup.string().required('Required'),
      publishedDate: Yup.date().required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      age: Yup.number().positive().integer().required('Required'),
    }),
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit} className="book-form">
      {['title', 'author', 'publisher', 'publishedDate', 'email', 'age', 'description'].map((field) => (
        <div key={field} className="form-group">
          <label>{field}</label>
          <input
            name={field}
            type={field === 'publishedDate' ? 'date' : 'text'}
            onChange={formik.handleChange}
            value={formik.values[field] || ''}
          />
          {formik.errors[field] && formik.touched[field] && <div className="error">{formik.errors[field]}</div>}
        </div>
      ))}
      <div className="form-actions">
        <button type="submit">Submit</button>
        <button type="button" onClick={() => navigate('/')}>Back</button>
      </div>
    </form>
  );
}

export default BookForm;