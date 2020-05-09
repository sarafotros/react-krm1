import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import blueGrey from '@material-ui/core/colors/blueGrey';

const Palette = {
	primary: {
		main: purple[600],
		dark: purple[800],
		light: purple[400],
		contrastText: purple[50],
		headerBg: blueGrey[600],
		bodyBg: blueGrey[100],
		footerBg: blueGrey[800]
	},
	secondary: {
		main: green[600],
		dark: green[800],
		light: green[400],
		contrastText: green[50],
	},
	text: {
		primary: '#000',
		secondary: '#cc6',
	},
};
export default Palette;