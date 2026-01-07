import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

function Results() {
  const { id } = useParams(); // surveyId
  const [responses, setResponses] = useState([]);
  const [survey, setSurvey] = useState(null);

  useEffect(() => {
    fetchSurvey();
    fetchResponses();
  }, []);

  const fetchSurvey = async () => {
    const res = await api.get("/surveys");
    const selected = res.data.find(s => s._id === id);
    setSurvey(selected);
  };

  const fetchResponses = async () => {
    const res = await api.get(`/responses/${id}`);
    setResponses(res.data);
  };

  if (!survey) return <p className="mt-5 text-center">Loading...</p>;

  return (
    <div className="container mt-4">
      <h3>{survey.title} - Results</h3>
      <p>Total Responses: <b>{responses.length}</b></p>

      {survey.questions.map((q, index) => {
        const counts = {};
        q.options.forEach(opt => counts[opt] = 0);

        responses.forEach(r => {
          const ans = r.answers.find(a => a.questionText === q.questionText);
          if (ans) counts[ans.answer]++;
        });

        return (
          <div key={index} className="mb-5">
            <h5>{q.questionText}</h5>

            <Bar
              data={{
                labels: Object.keys(counts),
                datasets: [
                  {
                    label: "Responses",
                    data: Object.values(counts)
                  }
                ]
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Results;
