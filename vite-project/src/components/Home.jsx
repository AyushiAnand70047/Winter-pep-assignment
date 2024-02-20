import React from 'react';

const Home = ({ user }) => {
  // Check if 'user' is defined before accessing its properties
  if (!user) {
    return (
      <div className="container mt-4">
        <div className="alert alert-warning" role="alert">
          Loading... Please fill the form
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Welcome, {user.name || 'Guest'}!</h2>
      <p className="mb-1">Age: {user.age}</p>
      <p className="mb-1">Email: {user.email}</p>
      <p className="mb-1">Address: {user.address}</p>
    </div>
  );
};

export default Home;
