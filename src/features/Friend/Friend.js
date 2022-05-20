import React, {useState} from 'react';

export const Friend = (props) => {
    const [counter, setCounter] = useState(0);

    const increment = () => setCounter(prevCounter => prevCounter + 1 );
    const decrement = () => setCounter(prevCounter => prevCounter - 1);
    
    return(
        <div className="Div" style={{backgroundColor: 'Aquamarine'}}>
            <p>The counter value is: {counter}</p>

            <button onClick={increment}>
                Increment
            </button>
            <button onClick={decrement}>
                Decrement
            </button>

        </div>
    )
}