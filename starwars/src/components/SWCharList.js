import React from 'react';
import SWCharBox from './SWCharBox.js';

const SWCharList = props => {
    
    return (
        <div className="swCharList">
            {
                props.charList.map(swChar => {
                    return  <SWCharBox name={swChar.name} hairColor={swChar.hair_color} gender={swChar.gender} birthYear={swChar.birth_year} />
                })

            }
        </div>
    );
  };


export default SWCharList;