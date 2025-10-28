import React, { useState } from 'react';

// Set your backend API URL here
const API_URL = 'http://localhost:5000/api/feedback';

function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Feedback submitted!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to submit feedback.');
      }
    } catch (error) {
      alert('Error submitting feedback: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Submit Feedback</h2>
      <input
        type="text"
        name="name"
        placeholder="Your name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="email"
        name="email"
        placeholder="Your email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <br />
      <textarea
        name="message"
        placeholder="Your feedback"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <br />
      <button type="submit">Send Feedback</button>
    </form>
  );
}

export default FeedbackForm;