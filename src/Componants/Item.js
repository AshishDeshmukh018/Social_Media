import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Item = ({ match }) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    const fetchItem = async () => {
      const result = await axios(
        `https://jsonplaceholder.typicode.com/posts/${match.params.id}`
      );
      setItem(result.data);
    };
    fetchItem();
  }, [match.params.id]);

  return (
    <div>
      <h2>{item.title}</h2>
      <p>{item.body}</p>
    </div>
  );
};

export default Item;
