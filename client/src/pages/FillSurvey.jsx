import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

function FillSurvey() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [survey, setSurvey] = useState(null);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    loadSurvey();
  }, []);

  const loadSurvey = async () => {
    try {
      const res = await api.get("/surveys");
      const selectedSurvey = res.data.find(s => s._id === id);
      setSurvey(selectedSurvey);
    } catch (err) {
      console.log("Failed to load survey");
    }
  };

  const handleAnswerChange = (question, value) => {
    setAnswers({
      ...answers,
      [question]: value
    });
  };

  const handleSubmit = async () => {
    try {
      const formattedAnswers = Object.keys(answers).map(q => ({
        questionText: q,
        answer: answers[q]
      }));

      await api.post("/responses", {
        surveyId: id,
        answers: formattedAnswers
      });

      alert("Thank you for your feedback!");
      navigate("/dashboard");
    } catch (err) {
      alert("Failed to submit survey");
    }
  };

  if (!survey) {
    return (
      <div className="container mt-5 text-center">
        <p>Loading survey...</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="page-title mb-4">{survey.title}</h2>

      {survey.questions.map((q, index) => (
        <div key={index} className="card shadow section p-4">
          <h5 className="mb-3">
            {index + 1}. {q.questionText}
          </h5>

          {q.options.map((opt, i) => (
            <div className="form-check mb-2" key={i}>
              <input
                className="form-check-input"
                type="radio"
                name={q.questionText}
                id={`${q.questionText}-${i}`}
                value={opt}
                onChange={() =>
                  handleAnswerChange(q.questionText, opt)
                }
              />
              <label
                className="form-check-label"
                htmlFor={`${q.questionText}-${i}`}
              >
                {opt}
              </label>
            </div>
          ))}
        </div>
      ))}

      <div className="text-center mt-4">
        <button
          className="btn btn-primary px-5 py-2"
          onClick={handleSubmit}
        >
          Submit Survey
        </button>
      </div>
    </div>
  );
}

export default FillSurvey;
