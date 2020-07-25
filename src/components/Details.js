import React from 'react';

export default function Details(props) {

    return (
        <ul style={{ display: (props.activate) ? "block" : "none" }} onClick={props.close}>
            <div className="position-absolute detail container">
                <h5 className="title">{props.details[0]}</h5>
                <p className="release">{props.details[2]}</p>
                <p className="plot">{props.details[3]}</p>
            </div>
        </ul>
    )
}
