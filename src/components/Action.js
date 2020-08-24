import React, { Fragment } from 'react';

function Action(props) {
    const isFetching = props.isFetching;

    if (!isFetching) {
        return (
            <Fragment>
                <button onClick={props.previous}>Previous</button>
                <button onClick={props.next}>Next</button>
            </Fragment>
    
        );
    } else {
        return (
            <></>
        )
    }
}

export default Action;