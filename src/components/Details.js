import React from 'react';

export default function Details(props) {
    return (
        <ul>
            {props.details.map((info, i) => <li key={i}>{info}</li>)}
        </ul>
    )
}
