import React, { useState } from 'react';

function Demo(){
    const [count ,setCount] = useState(0);
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>
                click me
            </button>

        </div>
    )
}

export default Demo;
