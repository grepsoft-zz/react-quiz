import React from "react";
import cx from "classnames";

function OneAnswer(props) {
    var classnames = cx("pointer", {
      wrong : props.answer === props.wrong && props.highlightInCorrect,
    correct: props.correct && props.highlightCorrect,
  });

  function onAnswer(e) {
    props.onAnswer(props.answer);
  }

  return (
    <li className={classnames} onClick={onAnswer}>
      {props.answer}
    </li>
  );
}

export default OneAnswer;
