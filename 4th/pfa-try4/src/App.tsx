import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageAccueil from './pages/PageAccueil';
import PageLogin from './pages/PageLogin';
import PageSignup from './pages/PageSignup';
import './App.css';
import PageSignUp2 from "./pages/PageSignUp2";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<PageAccueil />} />
        <Route path="/login" element={<PageLogin />} />
        <Route path="/signup" element={<PageSignup />} />
        <Route path="/signup2" element={<PageSignUp2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
