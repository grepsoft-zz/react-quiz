import React, { Fragment } from "react";

function Action(props) {
  const restart = props.showFinish;

  const restartBtn = restart ? (
    <button disabled={props.disable} onClick={props.restart}>
      Restart
    </button>
  ) : null;
  const nextBtn = !restart ? (
    <button disabled={props.disable} onClick={props.next}>
      Next
    </button>
  ) : null;

    return (
      <Fragment>
        {nextBtn}

        {restartBtn}
      </Fragment>
    );

}

export default Action;
