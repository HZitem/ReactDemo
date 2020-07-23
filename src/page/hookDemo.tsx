import React, { useState,useEffect } from 'react';

function Demo(){
    const [count ,setCount] = useState(0);
    useEffect(() => {
        // Update the document title using the browser API
        console.log(`You clicked ${count} times`)
      });
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>
                click
            </button>

        </div>
    )
}

export default Demo;
