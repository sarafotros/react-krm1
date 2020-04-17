const styles = {
	body: {
		fontFamily: '"Baloo 2" ,cursive',
		minHeight: '100vh',
		backgroundColor: 'white',
		display: 'flex',
		flexDirection: 'column',
	},
	main: {
		flex: 2,
		backgroundColor: 'lightBlue',
		color: '#fff',
		justifyContent: 'center',
		display: 'flex',
		alignItems: 'center',
	},
	footer: {
		backgroundColor: 'blue',
		height: 40,
	},

	header: {
		backgroundColor: 'grey',
		height: 60,
		display: 'flex',
		flexDirection: 'row-reverse',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	right: {
		backgroundColor: '#fff',
		height: 40,
		width: 150,
		color: 'black',
	},
	center: {
		backgroundColor: '#00f',
		height: 40,
		width: 350,
	},
	left: {
		backgroundColor: '#0f0',
		height: 40,
		width: 120,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	form: {
		height: 400,
		width: 400,
		backgroundColor: '#fff',
		borderRadius: 10,
		boxShadow: '2px 2px 10px #770',
		fontFamily: '"Baloo 2" ,cursive',
	},
	tablediv: {
		height: 600,
		width: 800,
		color: '#000',
		backgroundColor: '#fff',
		borderRadius: 10,
		boxShadow: '2px 2px 10px #770',
		fontFamily: '"Baloo 2" ,cursive',
		display: 'flex',
		alignItems: 'center',
		paddingTop: 40,
		flexDirection : 'column'
	},
};
export default styles;