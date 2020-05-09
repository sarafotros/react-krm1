import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Container, Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: '100vh',
		backgroundColor: '#F8BBD0',
	},
	headerGrid: {
		height: 50,
		backgroundColor: theme.palette.primary.headerBg,
	},
	bodyGrid: {
		backgroundColor: theme.palette.primary.bodyBg,
		minHeight: window.innerHeight-95,
	},
	footerGrid: {
		height: 45,
		backgroundColor: theme.palette.primary.footerBg,
	},
}));

export default function LayoutScreen() {
    const classes = useStyles()
    return (
			<Container className={classes.root}>
				<Grid container className={classes.headerGrid}></Grid>
				<Grid container className={classes.bodyGrid}></Grid>
				<Grid container className={classes.footerGrid}></Grid>
				Container
			</Container>
		);
}
