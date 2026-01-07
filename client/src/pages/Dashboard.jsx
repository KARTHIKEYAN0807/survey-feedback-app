import SurveyList from "./SurveyList";

function Dashboard() {
  return (
    <div className="container mt-4">
      <h2 className="page-title mb-4">My Surveys</h2>
      <SurveyList />
    </div>
  );
}

export default Dashboard;
