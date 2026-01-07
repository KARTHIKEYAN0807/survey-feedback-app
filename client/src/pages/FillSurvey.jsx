import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

function FillSurvey() {
  const { id } = useParams(); // surveyId
  const navigate = useNavigate();

  const [survey, setSurvey] = useState(null);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    fetchSurvey();
  }, []);

  const fetchSurvey = async () => {
    try {
      const res = await api.get(`/surveys`);
      const selected = res.data.find(s => s._id === id);
      setSurvey(selected);
    } catch (err) {
      console.log("Failed to load survey");
    }
  };

  const handleChange = (questionText, value) => {
    setAnswers({
      ...answers,
      [questionText]: value
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

      alert("Survey submitted successfully");
      navigate("/dashboard");
    } catch (err) {
      alert("Failed to submit survey");
    }
  };

  if (!survey) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container mt-4">
      <h3>{survey.title}</h3>

      {survey.questions.map((q, index) => (
        <div key={index} className="mb-4">
          <label className="form-label">
            {index + 1}. {q.questionText}
          </label>

          {q.options.map((opt, i) => (
            <div className="form-check" key={i}>
              <input
                className="form-check-input"
                type="radio"
                name={q.questionText}
                value={opt}
                onChange={() => handleChange(q.questionText, opt)}
              />
              <label className="form-check-label">{opt}</label>
            </div>
          ))}
        </div>
      ))}

      <button className="btn btn-success" onClick={handleSubmit}>
        Submit Survey
      </button>
    </div>
  );
}

export default FillSurvey;
