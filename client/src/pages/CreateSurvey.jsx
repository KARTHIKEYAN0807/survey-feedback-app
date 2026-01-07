import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function CreateSurvey() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([
    { questionText: "", options: "" }
  ]);

  const addQuestion = () => {
    setQuestions([...questions, { questionText: "", options: "" }]);
  };

  const handleQuestionChange = (index, field, value) => {
    const updated = [...questions];
    updated[index][field] = value;
    setQuestions(updated);
  };

  const handleCreateSurvey = async () => {
    try {
      const formattedQuestions = questions.map(q => ({
        questionText: q.questionText,
        options: q.options.split(",").map(opt => opt.trim())
      }));

      await api.post("/surveys", {
        title,
        questions: formattedQuestions
      });

      alert("Survey created successfully");

      // reset form
      setTitle("");
      setQuestions([{ questionText: "", options: "" }]);

      // 👉 navigate to surveys page
      navigate("/surveys");
    } catch (err) {
      alert("Failed to create survey");
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="page-title mb-4">Create New Survey</h3>

      <div className="mb-3">
        <label className="form-label">Survey Title</label>
        <input
          className="form-control"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Enter survey title"
        />
      </div>

      {questions.map((q, index) => (
        <div key={index} className="card shadow p-3 mb-3">
          <h6 className="mb-3">Question {index + 1}</h6>

          <input
            className="form-control mb-2"
            placeholder="Question text"
            value={q.questionText}
            onChange={e =>
              handleQuestionChange(index, "questionText", e.target.value)
            }
          />

          <input
            className="form-control"
            placeholder="Options (comma separated)"
            value={q.options}
            onChange={e =>
              handleQuestionChange(index, "options", e.target.value)
            }
          />
        </div>
      ))}

      <div className="mt-3">
        <button className="btn btn-outline-secondary me-2" onClick={addQuestion}>
          + Add Question
        </button>

        <button className="btn btn-primary" onClick={handleCreateSurvey}>
          Create Survey
        </button>
      </div>
    </div>
  );
}

export default CreateSurvey;
