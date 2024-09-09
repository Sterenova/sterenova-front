import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Home} from "./pages/Home.tsx";
import './style.css';
import { Equipment } from "./pages/Equipment.tsx";

function App() {
  return (
    <Router>
      <div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/equipment" element={<Equipment />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;