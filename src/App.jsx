import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Body from './Body';
import Todo from './Todo'; 
import Clock from './Clock';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/todo" element={<Todo />} /> 
      </Routes>
    </div>
  );
}

export default App;
