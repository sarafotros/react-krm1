import React, { useState } from 'react';
import styles from './styles';
import Mybtn from '../components/Mybtn';
// import Mybtnfunc from '../components/Mybtnfunc';
import MyInputFunc from '../components/MyinputFunc';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


export default function SigninFunc() {

    const [counter, setCounter] = useState(0)
    
    const myBtnClick = () => {
        setCounter(counter => counter + 1)
    }

    return (
			<div style={styles.form}>
				<MyInputFunc
					regex={/^[a-z0-9._]{3,}@[a-z]{2,}\.[a-z]{2,4}$/i}
					errorText="invalid email format"
				/>
				<MyInputFunc
					regex={/^09[0-9]{9}$/}
					errorText="invalid mobile number format"
				/>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-around',
					}}
				>
					<Mybtn title="signup" bg="#EA80FC" onClick={myBtnClick} />
					{/* <Mybtn title="signin" bg="#EA80FC" /> */}
					<Button variant="contained">Default</Button>
					<span style={{ marginLeft: 50, color: 'black', fontSize: 26 }}>
						{counter}
				</span>
				<IconButton><DeleteIcon/></IconButton>
				</div>
			</div>
		);
}
