// Code CoordinatesButton Component Here
import React from 'react';


export default function CoordinatesButton(props) {
    return (
        <button onClick={e=>props.onReceiveCoordinates([e.clientX, e.clientY])}>Coordinates</button>

    )
}