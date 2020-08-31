import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Quiz from "./components/Quiz";

const endPoint = "https://opentdb.com/api.php?amount=10&category=9";
//const endPoint = "./mock1.json";

function App() {
  const [data, setData] = useState({
    questions: [{ question: "" }],
    isFetching: true,
  });

  // load quiz data
  useEffect(() => {
    loadQuiz();
  }, []);

  const restartQuiz = () => {
    loadQuiz();
  };

  async function loadQuiz() {
    setData({
      questions: [{ question: "" }],
      isFetching: true,
    });
    const data = await axios.get(endPoint);
    setData({ questions: data.data.results, isFetching: false });
  }

  return (
    <div className="App">
      <Quiz data={data} onRestart={restartQuiz} />
    </div>
  );
}

export default App;
