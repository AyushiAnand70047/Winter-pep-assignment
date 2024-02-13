import React from 'react';

const Home = ({ user }) => {
  // Check if 'user' is defined before accessing its properties
  if (!user) {
    return <div>Loading... Please fill the form</div>; // or handle the loading state in another way
  }

  return (
    <div>
      <h2>Welcome, {user.name || 'Guest'}!</h2>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <p>Address: {user.address}</p>
    </div>
  );
};

export default Home;
