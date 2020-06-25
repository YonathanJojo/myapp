import React from 'react';
import './App.css';


// function Tweet(data) {
function Tweet({ name, tweet, like }) {
    return (
        <div className="tweet">

            {/* <h3>{data.name}</h3>
            <p>{data.tweet}</p>
            <h3>{data.like}</h3> */}
            <h3>{name}</h3>
            <p>{tweet}</p>
            <h3>{like}</h3>

        </div>

    );

}

export default Tweet;