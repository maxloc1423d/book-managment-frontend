import React from 'react';
import { useNavigate } from 'react-router-dom';

function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <h2>About our Library </h2>
      <p>
- Founded: 28- Aug- 2003
<br></br>
- Founder: Mr.Prabhakar Vasantrao Patange
<br></br>
- Location:Shree nager ,Nanded
<br></br>
<h2>Overview:</h2>

<br></br>

Established on 28th August 2003, this library was founded by Mr. Prabhakar Vasantrao Patange with a vision to cultivate a love for reading and lifelong learning in the heart of Shree Nagar, Nanded. Since its inception, the library has served as a community hub for knowledge seekers, offering access to a diverse range of books and educational resources.
Built on the values of accessibility and intellectual growth, it continues to inspire generations of readers, students, and curious minds in the region.



.</p>
      <p> Site Developer: <strong>Prabhakar Patange </strong> <br></br> prabhakarpatange8@gmail.com</p>
      <button onClick={() => navigate('/')} style={{ marginTop: '20px' }}>Back to Home</button>
    </div>
  );
}

export default AboutPage;