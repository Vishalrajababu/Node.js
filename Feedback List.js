import React, { useEffect, useState } from 'react';

// Use the same API URL here
const API_URL = 'http://localhost:5000/api/feedback';

function FeedbackList() {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await fetch(API_URL);
        if (response.ok) {
          const data = await response.json();
          setFeedback(data);
        } else {
          console.error('Failed to fetch feedback');
        }
      } catch (error) {
        console.error('Error fetching feedback:', error);
      }
    };

    fetchFeedback();
  }, []);

  return (
    <div>
      <h2>Feedback Received</h2>
      {feedback.length === 0 ? (
        <p>No feedback yet.</p>
      ) : (
        <ul>
          {feedback.map(item => (
            <li key={item._id}>
              <strong>{item.name}</strong> ({item.email}):<br />
              {item.message}
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FeedbackList;