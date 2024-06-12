import React from 'react';

function Telt({obj}) {
    const buttonBredde = 116;

    const bildeBredde = 1800; 

    const bildeHoyde = 900 

    const forsteTeltRatioX = obj.x/bildeBredde; /*midlertidig var*/
    
    const forsteTeltRatioY = obj.y/bildeHoyde; /*midlertidig var*/



    const divPosition = {
        position: 'absolute',
        top: forsteTeltRatioY*window.innerHeight,
        left: (forsteTeltRatioX*window.innerWidth - buttonBredde/2),
    
    };



    return (
        <div style={divPosition}>{console.log(window.innerWidth)}
            <button  class="bg-gray-300 opacity-0 hover:opacity-100 p-2 shadow-xl rounded-xl">
                <h1>
                    Teltnummer: {obj.x/*obj.teltNum*/}
                </h1>
               
                <p>
                    Plasser: {2/*obj.ledigePlasser*/}/{4/*obj.max*/}
                </p>
            </button>
        </div>
    );
}

export default Telt;
