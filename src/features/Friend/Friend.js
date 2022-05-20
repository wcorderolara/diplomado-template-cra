import React, {useState} from 'react';

export const Friend = (props) => {
    const [color, setColor] = useState('Tomato');

    const divStyle = {backgroundColor: color}
    
    return(
        <div className="Div" style={divStyle}>
            <p>The selected color is: {color}</p>

            <button onClick={() => setColor('Aquamarine')}>
                Aquamarine
            </button>
            <button onClick={() => setColor('BlueViolet')}>
                BlueViolet
            </button>
            <button onClick={() => setColor('Chartreuse')}>
                Chartreuse
            </button>
            <button onClick={() => setColor('CornflowerBlue')}>
                CornflowerBlue
            </button>

        </div>
    )
}