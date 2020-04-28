import React from 'react';
import styles from './styles';
// import MyTime from '../components/MyTime';
import Products from './Products';
import Signin from './Signin';
import Tables from './Tables';
import Myfunccmp from '../components/myfunccmp'
import MytimeFunc from '../components/MytimeFunc'

class Home extends React.Component {
	state = {
		counter: 0,
		products: [],
		page: 'p',
	};

	myBtnClick() {
		console.log('log');
	}

	// componentDidMount() {
	// 	setTimeout(() => {
	// 		this.setState({
	// 			products: [
	// 				{
	// 					id: 1,
	// 					image:
	// 						'https://dkstatics-public.digikala.com/digikala-products/119888088.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60',
	// 					title: 'ASUS ',
	// 					price: 920,
	// 				},
	// 				{
	// 					id: 2,
	// 					image:
	// 						'https://dkstatics-public.digikala.com/digikala-products/112966747.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60',
	// 					title: ' LENOVO',
	// 					price: 870,
	// 				},
	// 				{
	// 					id: 3,
	// 					image:
	// 						'https://dkstatics-public.digikala.com/digikala-products/119905233.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60',
	// 					title: 'ZENBOOK',
	// 					price: 940,
	// 				},
	// 				{
	// 					id: 4,
	// 					image:
	// 						'https://dkstatics-public.digikala.com/digikala-products/114389900.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60',
	// 					title: 'MACBOOK',
	// 					price: 1400,
	// 				},
	// 				{
	// 					id: 5,
	// 					image:
	// 						'https://dkstatics-public.digikala.com/digikala-products/112730056.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60',
	// 					title: 'stix',
	// 					price: 1200,
	// 				},
	// 				{
	// 					id: 6,
	// 					image:
	// 						'https://dkstatics-public.digikala.com/digikala-products/119203876.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60',
	// 					title: 'Sony',
	// 					price: 1000,
	// 				},
	// 			],
	// 		});
	// 	}, 2000);
	// }

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
						<Products />
					) : this.state.page === 't' ? (
						<Tables />
					) : (
						<Signin />
					)}
				</div>
				<div style={styles.footer}> <Myfunccmp/></div>
			</div>
		);
	}
}

export default Home;
