import React from 'react';
import theme from '../themes/Theme';
import { ThemeProvider } from '@material-ui/core/styles';
import MtStyles from '../screens/MtStyles'

export default function index() {
    return (
        <ThemeProvider theme={theme}>
            <MtStyles/>
       </ThemeProvider>
    )
}
