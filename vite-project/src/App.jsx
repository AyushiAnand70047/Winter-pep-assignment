import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FormAction from './components/FormAction';

function App() {
  const [user, setUser] = useState(null);
  const [isFormSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (formData) => {
    setUser(formData);
    setFormSubmitted(true);

    // Reset the form submission state after a delay
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000); // 3000 milliseconds = 3 seconds
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home user={user} isFormSubmitted={isFormSubmitted} />}
          />
          <Route
            path="/form"
            element={<FormAction onFormSubmit={handleFormSubmit} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
