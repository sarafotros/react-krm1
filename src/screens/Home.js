import React from 'react';
import styles from './styles';
import Mybtn from '../components/Mybtn';
import MyTime from '../components/MyTime';
import MyInput from '../components/MyInput';
class Home extends React.Component {
	render() {
		return (
			<div style={styles.body}>
				<div style={styles.header}>
					<div style={styles.right}>
						<p> React Developer</p>
					</div>
					<div style={styles.center}></div>
					<div style={styles.left}>
						<MyTime />
					</div>
				</div>
				<div style={styles.main}>
					<div style={styles.form}>
                        <MyInput regex={/^[a-z0-9._]{3,}@[a-z]{2,}\.[a-z]{2,4}$/i} errorText='invalid email format' />
                        <MyInput regex={/^09[0-9]{9}$/} errorText='invalid mobile number format' />
						<Mybtn title="login" />
						<Mybtn title="signup" bg="#EA80FC" />
					</div>
				</div>
				<div style={styles.footer}> hello</div>
			</div>
		);
	}
}

export default Home;
