import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import FillSurvey from "./pages/FillSurvey";
import Results from "./pages/Results";
import ProtectedLayout from "./components/ProtectedLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route element={<ProtectedLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/fill/:id" element={<FillSurvey />} />
          <Route path="/results/:id" element={<Results />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
