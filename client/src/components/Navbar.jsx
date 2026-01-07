import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4">
      {/* Brand */}
      <span
        className="navbar-brand fw-bold text-primary"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/dashboard")}
      >
        SurveyApp
      </span>

      <div className="collapse navbar-collapse show">
        <ul className="navbar-nav me-auto ms-4">
          <li className="nav-item">
            <NavLink className="nav-link" to="/dashboard">
              Surveys
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/create">
              Create Survey
            </NavLink>
          </li>
        </ul>

        <button
          className="btn btn-outline-primary"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
