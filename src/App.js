import React, { useState, useEffect } from "react";
import "./App.css";
import Question from "./components/Question";
import Action from "./components/Action";
const mock = require("./mock");

// const questions = [];

// mock.results.forEach((element) => {
//   let item = {};
//   item["question"] = element.question
//     .replace(/&quot;/g, '"')
//     .replace(/&shy;/g, "-");
//   let ia = element.incorrect_answers;
//   ia.push(element.correct_answer);
//   item["answers"] = ia;
//   item["correct_answer"] = element.correct_answer;
//   questions.push(item);
// });

function App() {
  const [idx, setIdx] = useState(0);
  const [data, setData] = useState({ questions: [{question: ""}], isFetching: true});

  useEffect(() => {
    setTimeout(() => {
      setData({questions: mock.results, isFetching: false});
    }, 2000);
  }, []);

  return (
    <div className="App">
      <Question data={data} index={idx} />
      <Action isFetching={data.isFetching}
        next={() =>
          setIdx(idx < data.questions.length - 1 ? idx + 1 : data.questions.length - 1)
        }
        previous={() => setIdx(idx > 0 ? idx - 1 : 0)}
      />
    </div>
  );
}

export default App;
