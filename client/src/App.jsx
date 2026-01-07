import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CreateSurveyPage from "./pages/CreateSurveyPage";
import FillSurvey from "./pages/FillSurvey";
import Results from "./pages/Results";
import ProtectedLayout from "./components/ProtectedLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected */}
        <Route element={<ProtectedLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create" element={<CreateSurveyPage />} />
          <Route path="/fill/:id" element={<FillSurvey />} />
          <Route path="/results/:id" element={<Results />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
