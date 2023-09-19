import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Article() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/shop')}>쇼핑</button>
      mainpage Article
    </div>
  );
}