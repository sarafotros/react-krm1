import React, { useState } from 'react'

export default (props) => {
    const [count, setCount] = useState (0)
    
    return (
        <div>
            <MyText txt={count}/>
        </div>
    )
}
function MyText(props) {
    return (
        <span>
          {props.txt}
        </span>
    )
}