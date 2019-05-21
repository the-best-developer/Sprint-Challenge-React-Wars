import React from 'react';
const SWCharBox = props => {
    
    return (
        <div className="swCharBox">
            <h1>{props.name}</h1>
            {console.log(props.name)}
            <div className="swCharBoxInfo">
                Hair color: <span>{props.hairColor}</span>
                <br></br>
                Gender: <span>{props.gender}</span>
                <br></br>
                Birth Year: <span>{props.birthYear}</span>
            </div>
        </div>
    );
  };


export default SWCharBox;