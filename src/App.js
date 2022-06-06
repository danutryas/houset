import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Catalog from "./pages/Catalog";
import Homepage from './pages/Homepage';
import CombinedContext from "./components/Context/CombinedContext";
import './styles/css/modal.css'

import ModalComponent from "./components/ModalComponent";

function App() {

  return (
    <CombinedContext>
      <div className="App">
        <Router>
          <Header />
          <Routes >
            <Route path="/" element={<Homepage />} />
            <Route path="/catalog" element={<Catalog />} />
          </Routes>
        </Router>
      </div>
      {/* hidden Modal */}
      <ModalComponent />
    </CombinedContext>
  );
}

export default App;
