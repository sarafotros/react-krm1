import React, { useState } from 'react'

export default (props) => {
    const [count, setCount] = useState (0)
    
    return (
			<div>
				<MyText txt={count} />
				<button
					style={{
						width: 90,
						height: 35,
						background: 'none',
						borderBottom: '2px solid grey',
					}}
					onClick={() => {
						setCount((count) => count + 1);
					}}
				>
					Increase
				</button>
				<button
					style={{
						width: 90,
						height: 35,
						background: 'none',
						borderBottom: '2px solid grey',
					}}
					onClick={() => {
						setCount((count) => count - 1);
					}}
				>
					Decrease
				</button>
			</div>
		);
}
function MyText(props) {
    return (
        <span style={{padding: 15, fontSize:20}}>
          {props.txt}
        </span>
    )
}