import React from 'react';
import styles from './styles';
import Product from '../components/Product';

class Home extends React.Component {
	state = {
		loading: true,
        products: [],
	};
    
	componentDidMount() {
		setTimeout(() => {
		  this.setState({
			products: [
				{
					id: 1,
					image:
						'https://dkstatics-public.digikala.com/digikala-products/119888088.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60',
					title: 'ASUS ',
					price: 920,
				},
				{
					id: 2,
					image:
						'https://dkstatics-public.digikala.com/digikala-products/112966747.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60',
					title: ' LENOVO',
					price: 870,
				},
				{
					id: 3,
					image:
						'https://dkstatics-public.digikala.com/digikala-products/119905233.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60',
					title: 'ZENBOOK',
					price: 940,
				},
				{
					id: 4,
					image:
						'https://dkstatics-public.digikala.com/digikala-products/114389900.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60',
					title: 'MACBOOK',
					price: 1400,
				},
				{
					id: 5,
					image:
						'https://dkstatics-public.digikala.com/digikala-products/112730056.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60',
					title: 'stix',
					price: 1200,
				},
				{
					id: 6,
					image:
						'https://dkstatics-public.digikala.com/digikala-products/119203876.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60',
					title: 'Sony',
					price: 1000,
				},
			  ],
			  loading:false
		});	
	 },2000)
    }


	render() {
		return (
		<div style={styles.productdiv}>
				{this.state.loading ? (
				<div>Loading...</div>
			): (this.state.products.map((product) => {
				return (
					<Product key={product.id} image={product.image} title={product.title} price={product.price}/>     
				)
			}))}	
		
		</div>
		
		);
	}
}

export default Home;
