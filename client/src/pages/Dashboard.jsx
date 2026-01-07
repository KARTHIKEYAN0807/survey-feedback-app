import CreateSurvey from "./CreateSurvey";
import SurveyList from "./SurveyList";

function Dashboard() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="container mt-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Dashboard</h2>
        <button className="btn btn-danger" onClick={logout}>
          Logout
        </button>
      </div>

      {/* Create Survey Section */}
      <div className="mb-5">
        <CreateSurvey />
      </div>

      <hr />

      {/* Survey List Section */}
      <SurveyList />
    </div>
  );
}

export default Dashboard;
