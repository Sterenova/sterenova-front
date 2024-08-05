import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Home} from "./pages/Home.tsx";
import { Contact } from "./pages/Contact.tsx";
import './style.css';

function App() {
  return (
    <Router>
      <div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
