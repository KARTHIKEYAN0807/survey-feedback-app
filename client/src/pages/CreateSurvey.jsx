import { useState } from "react";
import api from "../services/api";

function CreateSurvey() {
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
        options: q.options.split(",")
      }));

      await api.post("/surveys", {
        title,
        questions: formattedQuestions
      });

      alert("Survey created successfully");
      setTitle("");
      setQuestions([{ questionText: "", options: "" }]);
    } catch (err) {
      alert("Failed to create survey");
    }
  };

  return (
    <div className="container mt-4">
      <h3>Create Survey</h3>

      <div className="mb-3">
        <label className="form-label">Survey Title</label>
        <input
          className="form-control"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>

      {questions.map((q, index) => (
        <div key={index} className="card p-3 mb-3">
          <h6>Question {index + 1}</h6>

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

      <button className="btn btn-secondary me-2" onClick={addQuestion}>
        Add Question
      </button>

      <button className="btn btn-primary" onClick={handleCreateSurvey}>
        Create Survey
      </button>
    </div>
  );
}

export default CreateSurvey;
