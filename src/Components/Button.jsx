import React from 'react';

function Button({ obj }) {
    const buttonBredde = 116;

    const bildeBredde = 3508;

    const førsteTeltRatio = 963/bildeBredde;

    const andreTeltRatio = 1797/bildeBredde;

    const divPosition = {
        position: 'absolute',
        top: obj.y,
        left: (obj.x - buttonBredde/2),
    
    };



    return (
        <div style={divPosition}>{console.log(divPosition.left)}
            <button  class="bg-gray-300 opacity-0 hover:opacity-100 p-2 shadow-xl rounded-lg">
                <h1>
                    Teltnummer: {obj.teltNum}
                </h1>
               
                <p>
                    Plasser: {obj.ledigePlasser}/{obj.max}
                </p>
            </button>
        </div>
    );
}

export default Button;
