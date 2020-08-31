import React from "react";
import OneAnswer from "./OneAnswer";

function Answer(props) {
  const answersData = props.answer.answers || [];

  function onAnswer(e) { 
    props.onAnswer(e);
  }

  const answers = answersData.map((a, idx) => (
    <OneAnswer
      answer={a}
      correct={a === `${props.answer.correct}`}
      highlightCorrect={props.highlightCorrect}
      highlightInCorrect={props.highlightInCorrect}
      key={idx}
      wrong={props.wrong}
      onAnswer={onAnswer}
    />
  ));

  return <ul>{answers}</ul>;
}

export default Answer;
