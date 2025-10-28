import FeedbackForm from './FeedbackForm';
import FeedbackList from './FeedbackList';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Feedback App</h1>
      <FeedbackForm />
      <hr />
      <FeedbackList />
    </div>
  );
}

export default App;