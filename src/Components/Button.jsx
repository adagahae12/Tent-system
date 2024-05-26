import React from 'react';

function Button({ obj }) {
    const buttonBredde = 116;

    const bildeBredde = 3508; /*midlertidig var*/

    const bildeHøyde = 1658; /*midlertidig var*/

    const førsteTeltRatioX = 963/bildeBredde; /*midlertidig var*/

    const andreTeltRatioX = 1797/bildeBredde; /*midlertidig var*/
    
    const førsteTeltRatioY = 1389/bildeHøyde; /*midlertidig var*/

    const andreTeltRatioY = 1065/bildeHøyde; /*midlertidig var*/



    const divPosition = {
        position: 'absolute',
        top: andreTeltRatioY*window.innerHeight,
        left: (andreTeltRatioX*window.innerWidth - buttonBredde/2),
    
    };



    return (
        <div style={divPosition}>{console.log(window.innerWidth)}
            <button  class="bg-gray-300 opacity-0 hover:opacity-100 p-2 shadow-xl rounded-xl">
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
