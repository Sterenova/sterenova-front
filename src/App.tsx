import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Home} from "./pages/Home.tsx";
import './style.css';
import { Equipment } from "./pages/Equipment.tsx";
import { ErrorPage } from "./pages/ErrorPage.tsx";
import { Product } from "./pages/Product.tsx";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/equipment/:id" element={<Product />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;