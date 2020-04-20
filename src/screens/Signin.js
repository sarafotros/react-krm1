import React from 'react';
import styles from './styles';
import Mybtn from '../components/Mybtn';
import Mybtnfunc from '../components/Mybtnfunc';
import MyInput from '../components/MyInput';
class Home extends React.Component {
    state = {
       counter: 0, 
    }

    myBtnClick() {
        console.log('log');
        
    }
	render() {
		return (
			<div style={styles.form}>
				<MyInput
					regex={/^[a-z0-9._]{3,}@[a-z]{2,}\.[a-z]{2,4}$/i}
					errorText="invalid email format"
				/>
				<MyInput
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
					<Mybtn title="signup" bg="#EA80FC" onClick={this.myBtnClick} />
					<Mybtnfunc
						onClick={() => {
							this.setState((state) => ({
								counter: state.counter + 1,
							}));
						}}
						title="counter"
					/>
					<span style={{ marginLeft: 50, color: 'black', fontSize: 26 }}>
						{this.state.counter}
					</span>
				</div>
			</div>
		);
	}
}

export default Home;
