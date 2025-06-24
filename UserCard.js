// src/components/UserCard.js
import React from 'react';

const UserCard = ({ name, age, email }) => {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default UserCard;