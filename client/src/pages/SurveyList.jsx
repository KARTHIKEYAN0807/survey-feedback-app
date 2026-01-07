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
    <div className="mt-4">
      <h4 className="mb-3">Available Surveys</h4>

      {surveys.length === 0 && (
        <p className="text-muted">No surveys found.</p>
      )}

      {surveys.map((survey) => (
        <div key={survey._id} className="card p-3 mb-3 shadow-sm">
          <h5>{survey.title}</h5>
          <p className="text-muted">
            {survey.questions.length} questions
          </p>

          <div>
            <button
              className="btn btn-primary me-2"
              onClick={() => navigate(`/fill/${survey._id}`)}
            >
              Fill Survey
            </button>

            <button
              className="btn btn-outline-success"
              onClick={() => navigate(`/results/${survey._id}`)}
            >
              View Results
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SurveyList;
