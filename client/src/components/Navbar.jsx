import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4">
      <span className="navbar-brand fw-bold text-primary">
        SurveyApp
      </span>

      <div className="ms-auto">
        <button className="btn btn-outline-primary" onClick={logout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
