import React from "react";
import styles from './styles';
import Mybtn from '../components/Mybtn'

class Home extends React.Component {
  
    render() { 
     return (
        <div style={styles.body}>
            <div style={styles.header}>
                <div style={styles.right}>
                    <p> React Developer</p>
                </div>
                <div style={styles.center}></div>
                <div style={styles.left}></div>
            </div>
            <div style={styles.main}>
                <div style={styles.form}>
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
