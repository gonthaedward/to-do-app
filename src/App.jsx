import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Body from './Body';
import Todo from './Todo'; // Import the Todo component

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/clock" element={<Body />} />
          <Route path="/todo" element={<Todo />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
