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
  const { id } = useParams();
  const [survey, setSurvey] = useState(null);
  const [responses, setResponses] = useState([]);

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

  if (!survey) {
    return (
      <div className="container mt-5 text-center">
        <p>Loading analytics...</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="page-title mb-4">
        {survey.title} — Analytics
      </h2>

      {/* KPI SECTION */}
      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card shadow p-4 text-center">
            <h6 className="text-muted mb-2">Total Responses</h6>
            <h1 className="fw-bold text-success">
              {responses.length}
            </h1>
          </div>
        </div>
      </div>

      {/* CHARTS */}
      {survey.questions.map((q, index) => {
        const counts = {};
        q.options.forEach(opt => (counts[opt] = 0));

        responses.forEach(r => {
          const ans = r.answers.find(
            a => a.questionText === q.questionText
          );
          if (ans) counts[ans.answer]++;
        });

        return (
          <div key={index} className="card shadow section p-4">
            <h5 className="mb-4">
              {index + 1}. {q.questionText}
            </h5>

            <div style={{ height: "300px" }}>
              <Bar
                data={{
                  labels: Object.keys(counts),
                  datasets: [
                    {
                      label: "Responses",
                      data: Object.values(counts),
                      backgroundColor: "#4f46e5"
                    }
                  ]
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false
                    }
                  },
                  scales: {
                    y: {
                      beginAtZero: true,
                      grace: "20%",
                      ticks: {
                        precision: 0
                      }
                    }
                  }
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Results;
