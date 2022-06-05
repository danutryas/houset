import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";import './App.css';
import Header from './components/Header';
import Catalog from "./pages/Catalog";
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes >
          <Route path="/" element={<Homepage />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
