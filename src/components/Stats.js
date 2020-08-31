import React from 'react';

function Stats(props) {

    return (
        <h1>Correct: {props.count} / {props.total}</h1>
    )
}

export default Stats;