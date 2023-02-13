import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Results from "./pages/results/Results";
import Review from "./pages/review/Review";

function App() {
  return (

    < Router >

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/review" element={<Review />} />
      </Routes >


      <Footer />
    </Router >
  );
}

export default App;