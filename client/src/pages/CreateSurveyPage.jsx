import CreateSurvey from "./CreateSurvey";

function CreateSurveyPage() {
  return (
    <div className="container mt-4">
      <h2 className="page-title mb-4">Create New Survey</h2>

      <div className="card shadow section p-4">
        <CreateSurvey />
      </div>
    </div>
  );
}

export default CreateSurveyPage;
