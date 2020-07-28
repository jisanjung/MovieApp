import React from 'react';

export default function Details(props) {

    return (
        <section style={{ display: (props.activate) ? "block" : "none" }} onClick={props.close} className="card bg-dark mt-5 cursor">
            <div className="position-relative border" style={{ background: `url("https://image.tmdb.org/t/p/w500${props.details[1]}")` }}>
                <div className="position-absolute mr-5 ml-5 mb-4 text-wrap">
                    <h3 className="title">{props.details[0]}</h3>
                    <p className="release">{props.details[2]}</p>
                    <p className="plot">{props.details[3]}</p>
                </div>
            </div>  
        </section>
    )
}
