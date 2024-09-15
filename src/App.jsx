import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Chatbot from './pages/Chatbot';
import Translator from './pages/Translator';
import FAQ from './pages/FAQ';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/translator" element={<Translator />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
