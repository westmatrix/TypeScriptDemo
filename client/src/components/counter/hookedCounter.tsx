
import React, { useState,useEffect } from 'react';


export default function HookedCounter () {

    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        document.title = `Hello ${count}`;
      }, [count]);

    return (
        <div>
            <h1>{ count }</h1>
            <button onClick = {() => setCount(count + 1)}> + </button>
            <br/>
            <button onClick = {() => setCount(count - 1)}> - </button>
        </div>
    );
}