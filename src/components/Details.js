import React from 'react';

export default function Details(props) {

    let card = {
        boxShadow: "0px 0px 111px 22px rgba(25,244,255,0.75)"
    }

    return (
        <ul style={{ display: (props.activate) ? "block" : "none" }} onClick={props.close} className="center" style={card}>
            <div className="position-relative">
                <img src={`https://image.tmdb.org/t/p/w500${props.details[1]}`} style={{ width: "100%", height: "100%" }}/>
                <div className="tint"></div>
                <div className="position-absolute mr-3 ml-3" style={{ bottom: "0" }}>
                    <h5 className="title">{props.details[0]}</h5>
                    <p className="release">{props.details[2]}</p>
                    <p className="plot">{props.details[3]}</p>
                </div>
            </div>  
        </ul>
    )
}
