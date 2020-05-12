import purple from '@material-ui/core/colors/purple';
import cyan from '@material-ui/core/colors/cyan';
import blueGrey from '@material-ui/core/colors/blueGrey';

const Palette = {
	primary: {
		main: purple[200],
		dark: purple[800],
		light: purple[100],
		contrastText: purple[50],
		headerBg: blueGrey[600],
		bodyBg: blueGrey[100],
		footerBg: blueGrey[800]
	},
	secondary: {
		main: cyan[600],
		dark: cyan[800],
		light: cyan[400],
		contrastText: cyan[50],
	},
	text: {
		primary: '#000',
		secondary: '#cc6',
	},
};
export default Palette;