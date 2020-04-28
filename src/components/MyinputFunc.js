import React, { useState}from 'react'

export default function MyinputFunc({ regex , errorText}) { 
    const [email, setEmail] = useState('')
    const [error , setError] = useState( false ) 

    return (
			<div
				style={{
					color: 'black',
					width: '100%',
					padding: 15,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
				}}
			>
				<input
                onBlur={(e) => {
                    let value = e.target.value;
                    let emailregex = regex;
                    setError(!emailregex.test(value));
                    setEmail(value)
                     }}      
					style={{
						width: '80%',
						border: 'none',
						borderBottom: '1px solid #000',
					}}
					type="text"
					placeholder="input..."
				></input>
				{error ? (
					<span style={{ color: 'red', fontSize: 12, marginTop: 5 }}>
						{errorText}
					</span>
				) : null}
			</div>
		);
}
