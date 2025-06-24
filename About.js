import React, { useState } from 'react';


function About() {
  const [user, setUser] = useState({
    name: 'John Doe',
    age: 30,
    occupation: 'Developer'
  });

  const updateUser = (field, value) => {
    setUser({
      ...user,
      [field]: value
    });
  };

  return (
    <div>
      <h1>About Us</h1>
      <div className="user-profile">
        <h2>User Profile</h2>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>Occupation: {user.occupation}</p>
        
        <div className="edit-form">
          <input
            type="text"
            value={user.name}
            onChange={(e) => updateUser('name', e.target.value)}
            placeholder="Name"
          />
          <input
            type="number"
            value={user.age}
            onChange={(e) => updateUser('age', e.target.value)}
            placeholder="Age"
          />
          <input
            type="text"
            value={user.occupation}
            onChange={(e) => updateUser('occupation', e.target.value)}
            placeholder="Occupation"
          />
        </div>
      </div>
    </div>
  );
}

export default About;