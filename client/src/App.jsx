import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import FillSurvey from "./pages/FillSurvey";
import Results from "./pages/Results";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/fill/:id" element={<FillSurvey />} />
        <Route path="/results/:id" element={<Results />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
