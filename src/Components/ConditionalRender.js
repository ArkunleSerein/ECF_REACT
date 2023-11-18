import React from 'react';

function ConditionalRender(props) {

    const condition = props.condition === true ?  <p>Vous aimez React !</p> : <p>Vous n'aimez pas React?</p>;

    
    return (
        <div>
            {condition}
        </div>
    )
}
export default ConditionalRender;