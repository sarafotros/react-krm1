import React, { useState}from 'react'
import TextField from '@material-ui/core/TextField';


export default function MyinputFunc({ regex , errorText}) { 
    const [email, setEmail] = useState('')
    const [error , setError] = useState( false ) 
	const [emailErrorText, setEmailErrorText] = useState('')
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
			<TextField label="Email" onBlur={(e) => {
				let value = e.target.value;
				let emailregex = regex;
				setError(!emailregex.test(value))
				if (!emailregex.test(value)) {
					setEmailErrorText('invalid Email format')
				} else {
					setEmailErrorText('')
				}
				setEmail(value);
			}} style={{ width: '80%' }} helperText={emailErrorText} error={error}/>
				     {error ? (<span style={{ color: 'red', fontSize: 12, marginTop: 5 }}>
						{errorText}
					</span>
				) : null}
			</div>
		);
}
