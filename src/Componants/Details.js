import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Fetch data from API for single item
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(data => setItem(data));
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className='detail-item'>
      <img src={`https://picsum.photos/200?random=${item.id}`} alt="post" />
      <h1> User ID : {item.id}</h1>
      <h2> Title : {item.title}</h2> <br/>
      <h3>Body Description : {item.body}</h3> <br/>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Detail;
