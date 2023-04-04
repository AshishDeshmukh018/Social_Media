import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        'https://jsonplaceholder.typicode.com/posts'
      );
      setItems(result.data);
    };
    fetchItems();
  }, []);

  const [expandedIds, setExpandedIds] = useState([]);

  const handleExpand = (id) => {
    if (expandedIds.includes(id)) {
      setExpandedIds(expandedIds.filter((expandedId) => expandedId !== id));
    } else {
      setExpandedIds([...expandedIds, id]);
    }
  };

  return (
    <div className="item-list">
      <h2>Social Media App</h2>
      {items.map((item) => (
        <div key={item.id} className="item-container">
          <h3 className="item-title">
          <img src={`https://picsum.photos/200?random=${item.id}`} alt="post" />
            <Link to={`/items/${item.id}`}>User ID: {item.id}</Link> <br/> <br/> 
            <Link to={`/items/${item.id}`}>Title: {item.title}</Link> <br/> <br/> 
          </h3>
          <p className="item-description">
            {expandedIds.includes(item.id)
              ? item.body
              : `${item.body.slice(0, 50)}... `}
            {item.body.length > 50 && (
              <button
                className="read-more-button"
                onClick={() => handleExpand(item.id)}
              >
                {expandedIds.includes(item.id) ? "Read less" : "Read more"}
              </button>
            )}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
