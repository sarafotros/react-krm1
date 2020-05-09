import { createMuiTheme } from '@material-ui/core/styles';
import Palette from './Palette'
const theme = createMuiTheme({
    direction: 'rtl',
    spacing: 2,
    palette: Palette,
    typography: {
        fontSize: 16,
        color: Palette.text.primary,
        h1: {
            fontSize: 30
        },
        h2: {
            fontSize: 25,
        }
    }
})

export default theme;

//   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',