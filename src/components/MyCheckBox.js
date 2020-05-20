import React,{useState} from 'react'

export default function MyCheckBox() {
    const [check, setCheck] = useState(true)
    return (
        <div onClick={()=> setCheck(check => !check)}
            style={{ width: '100%', padding: 10, display: 'flex', alignItems: 'center' }}>
            <input checked={check} type="checkbox" />
				<span style={{ marginLeft: 10,}}>Remember Me</span>
			</div>
		);
}
