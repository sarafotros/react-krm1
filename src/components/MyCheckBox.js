import React,{useState} from 'react'

export default function MyCheckBox() {
    const [check, setCheck] = useState(true)
    return (
        <div onClick={()=> setCheck(check => !check)}
            style={{ width: '100%', padding: 10, display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <span style={{width: 15, height: 15, border:'1px solid grey', borderRadius:2, backgroundColor: check? 'grey': 'transparent'}}></span>
            {/* <input checked={check} onChange={()=>{}} type="checkbox" /> */}
				<span style={{ marginLeft: 10,}}>Remember Me</span>
			</div>
		);
}
