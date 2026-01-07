import Navbar from "../components/Navbar";
import CreateSurvey from "./CreateSurvey";
import SurveyList from "./SurveyList";

function Dashboard() {
  return (
    <>
      {/* Top Navigation */}
      <Navbar />

      <div className="container mt-4">
        <h2 className="page-title mb-4">Dashboard</h2>

        {/* Create Survey Section */}
        <div className="card shadow section p-4">
          <h5 className="mb-3">Create New Survey</h5>
          <CreateSurvey />
        </div>

        {/* Survey List Section */}
        <div className="section mt-5">
          <SurveyList />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
