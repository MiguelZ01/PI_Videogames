import "./App.css";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Henry Videogames</h1>
      <Home />

      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
