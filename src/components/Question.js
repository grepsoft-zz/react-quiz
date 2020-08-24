import React, { Fragment, useEffect } from "react";
import Answer from "./Answer";
import { cleanUpSpecialChars, shuffle } from "../util";


function Question(props) {
  const quiz = props.data.questions[props.index];
  const answer = {
    correct: quiz.correct_answer,
    answers: quiz.incorrect_answers
      ? `${quiz.incorrect_answers.join()},${quiz.correct_answer}`.split(",")
      : [],
  };

  shuffle(answer.answers);

  const question = props.data.isFetching ? (
    ""
  ) : (
    <h3>
      {cleanUpSpecialChars(quiz.question)}
    </h3>
  );

  const whichQuestion = props.data.isFetching ? (
    ""
  ) : (
    <h2>Question # {props.index + 1}</h2>
  );

  return (
    <Fragment>
      <h2>{props.data.isFetching ? "Loading..." : ""}</h2>
      {whichQuestion}
      {question}
      <Answer answer={answer} />
    </Fragment>
  );
}

export default Question;
