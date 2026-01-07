import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function SurveyList() {
  const [surveys, setSurveys] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchSurveys();
  }, []);

  const fetchSurveys = async () => {
    try {
      const res = await api.get("/surveys");
      setSurveys(res.data);
    } catch (err) {
      console.log("Failed to fetch surveys");
    }
  };

  return (
    <div className="section">
      <h4 className="page-title mb-3">Available Surveys</h4>

      {surveys.length === 0 && (
        <div className="card p-4 text-center shadow">
          <p className="text-muted mb-0">
            No surveys available yet.
          </p>
        </div>
      )}

      <div className="row">
        {surveys.map((survey) => (
          <div key={survey._id} className="col-md-6 mb-4">
            <div className="card shadow h-100 p-4">
              <div className="d-flex justify-content-between align-items-start mb-2">
                <h5 className="mb-1">{survey.title}</h5>
                <span className="badge bg-primary">
                  {survey.questions.length} Questions
                </span>
              </div>

              <p className="text-muted mb-4">
                Participate in this survey and share your feedback.
              </p>

              <div className="mt-auto">
                <button
                  className="btn btn-primary me-2"
                  onClick={() => navigate(`/fill/${survey._id}`)}
                >
                  Fill Survey
                </button>

                <button
                  className="btn btn-outline-primary"
                  onClick={() => navigate(`/results/${survey._id}`)}
                >
                  View Results
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SurveyList;
