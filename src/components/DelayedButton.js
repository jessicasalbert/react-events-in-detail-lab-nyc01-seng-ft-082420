// Code DelayedButton Component Here
import React from 'react';


export default function DelayedButton(props) {

    const clickHandler = (e) => {
        e.persist()
         window.setTimeout(() => {
            props.onDelayedClick(e)
            props.delay})
    }

    return (
        <button onClick={clickHandler}>Hi</button>

    )
}