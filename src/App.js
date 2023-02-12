import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home";
import Results from "./pages/results/Results"

function App() {
  return (

    < Router >

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
      </Routes >



    </Router >
  );
}

export default App;