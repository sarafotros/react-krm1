import React from 'react';
import styles from './styles';
// import Products from './Products';
import ProductsFunc from './ProductsFunc'
// import Signin from './Signin';
import SigninFunc from './SigninFunc';
import Tables from './Tables';
import Myfunccmp from '../components/myfunccmp'
import MytimeFunc from '../components/MytimeFunc'
// import SigninFunc from './signinFunc';

class Home extends React.Component {
	state = {
		counter: 0,
		products: [],
		page: 'p',
	};


	render() {
		return (
			<div style={styles.body}>
				<div style={styles.header}>
					<div style={styles.right}>
						<p> React Developer</p>
					</div>
                    <div style={styles.center}>
                        <ul style={{
                            display: 'flex', flexDirection: 'row', listStyle: 'none',
                            alignItems: 'center', marginTop: 10, justifyContent: 'space-around'}}>
                            <li onClick={()=>{this.setState({page:'p'})}} style={{color: this.state.page==='p'? ('#311B92'):('white'), cursor: 'pointer'}}>Products</li>
                            <li onClick={()=>{this.setState({page:'t'})}} style={{color: this.state.page==='t'? ('#311B92'):('white'), cursor: 'pointer'}}>Table</li>
                            <li onClick={()=>{this.setState({page:'s'})}} style={{color: this.state.page==='s'? ('#311B92'):('white'), cursor: 'pointer'}}>Sign in</li>
                        </ul>
                    </div>
					<div style={styles.left}>
						<MytimeFunc />
					</div>
				</div>
				<div style={styles.main}>
					{this.state.page === 'p' ? (
						<ProductsFunc />
					) : this.state.page === 't' ? (
						<Tables />
					) : (
						<SigninFunc />
					)}
				</div>
				<div style={styles.footer}> <Myfunccmp/></div>
			</div>
		);
	}
}

export default Home;
