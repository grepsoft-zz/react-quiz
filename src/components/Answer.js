import React from "react";
import { cleanUpSpecialChars } from '../util';

function Answer(props) {
  const correctAnswer = props.answer.correct;
  const answersData = props.answer.answers || [];

  function checkAnswer(answer) {
    if (answer === correctAnswer) {
      console.log("correct");
    } else {
      console.log("in-correct");
    }
  }

  const answers = answersData.map((a, idx) => (
    <li key={idx} onClick={(e) => checkAnswer(a)}>
      {cleanUpSpecialChars(a)}
    </li>
  ));

  return <ul>{answers}</ul>;
}

export default Answer;
