import React, { useState, useEffect, useRef } from "react";
import Question from "./Question";
import Answer from "./Answer";
import Action from "./Action";
import Stats from "./Stats";
import QuestionIndex from "./QuestionIndex";
import { shuffle } from "../util";
import { htmlDecode } from "../util";

function Quiz(props) {    
    
  const data = props.data;

  const [idx, setIdx] = useState(0);
  const [count, setCount] = useState(0);
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState({
    isAnswered: false,
    correct: null,
    answers: [],
  });

  /* 
    keep track of wrong answer 
    useRef can be used like an instance variable and doesn't cause
    a re-render of the component.
  */
  const wrongRef = useRef(false);

  // enable/disable the next button. Only enable when an answer is chosen
  const [disable, setDisable] = useState(true);
  const [highlightCorrect, setHighlighCorrect] = useState(false);
  const [highlightInCorrect, setHighlightInCorrect] = useState(false);

  useEffect(() => {
    setHighlighCorrect(false);
    setHighlightInCorrect(false);
    setDisable(true);
    setQuestion(htmlDecode(data.questions[idx].question));
    setAnswer({
      isAnswered: false,
      correct: htmlDecode(data.questions[idx].correct_answer),
      answers: data.questions[idx].incorrect_answers
        ? shuffle(
            `${htmlDecode(data.questions[idx].incorrect_answers.join('|'))}|${
              htmlDecode(data.questions[idx].correct_answer)
            }`.split("|")
          )
        : [],
    });
  }, [data, idx]);

  function restart() {
      props.onRestart();
      setIdx(0);
      setCount(0);
  }

  const onAnswer = (userAnswer) => {
    if (!answer.isAnswered) {
      setHighlighCorrect(true);
      if (userAnswer === answer.correct) {
        updateStats();
      } else {
        wrongRef.current = userAnswer;
        setHighlightInCorrect(true);
      }
      // enable the next button
      setDisable(false);

      setAnswer((state) => ({ ...state, isAnswered: true }));
    }
  };

  function updateStats() {
    setCount(count + 1);
  }

  function nextQuestion() {
    setIdx(
      idx < data.questions.length - 1 ? idx + 1 : data.questions.length - 1
    );
  }

  return (
    <div className="quiz">
      {data.isFetching ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <Stats count={count} total={data.questions.length} />
          <QuestionIndex index={idx + 1} />
          <Question question={question} />
          <Answer
            answer={answer}
            onAnswer={onAnswer}
            highlightCorrect={highlightCorrect}
            highlightInCorrect={highlightInCorrect}
            wrong={wrongRef.current}
          />
          <Action
            disable={disable}
            showFinish={idx === data.questions.length - 1}
            isFetching={data.isFetching}
            next={nextQuestion}
            restart={restart}
          />
        </>
      )}
    </div>
  );
}

export default Quiz;
