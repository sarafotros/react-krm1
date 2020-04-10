const styles = {
	body: {
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
        height: 20,
        width: 100,
	},
	center: {
        backgroundColor: '#00f',
        height: 20,
        width:350,
	},
	left: {
        backgroundColor: '#0f0',
        height: 20,
        width: 60
    },
    form: {
        height: 400,
        width: 400,
        backgroundColor: '#fff',
        borderRadius: 10,
        boxShadow: '2px 2px 10px #770',
    }
};
export default styles;