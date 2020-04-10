import React from "react";
import styles from './styles';

class Home extends React.Component {
  
    render() { 
     return (
				<div style={styles.body}>
					<div style={styles.header}>
						<div style={styles.right}></div>
						<div style={styles.center}></div>
						<div style={styles.left}></div>
					</div>
                    <div style={styles.main}> Hi
                        <div style={styles.form}></div>
                    </div>
					<div style={styles.footer}> hello</div>
				</div>
			);
    }
}
 
export default Home;
