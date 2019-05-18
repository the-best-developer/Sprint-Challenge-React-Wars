import React from 'react';

const SWCharBox = props => {
    
    return (
        <div className="swCharBox">
            <h1>{props.name}</h1>
            {console.log(props.name)}
            <div className="swCharBoxInfo">
                <span>Hair color: {props.hairColor}</span>
                <br></br>
                <span>Gender: {props.gender}</span>
                <br></br>
                <span>Birth Year: {props.birthYear}</span>
            </div>
        </div>
    );
  };


export default SWCharBox;