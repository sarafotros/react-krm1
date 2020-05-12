import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Container, Grid, Hidden } from '@material-ui/core';


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
		minHeight: window.innerHeight - 95,
	},
	footerGrid: {
		height: 45,
		backgroundColor: theme.palette.primary.footerBg,
	},
	logoGrid: {
		
	},
	menuGrid: {
		backgroundColor: 'lightBlue',
	},
	signBtnGrid: {
		backgroundColor: 'lightCoral',
	},
	formGrid: {
		height: 400,
		backgroundColor: '#BBDEFB',
	},
    logoImg: {
        width:80
    }
}));

export default function LayoutScreen() {
    const classes = useStyles()
    return (
			<Container className={classes.root}>
				<Grid
					container
					justify="space-between"
					alignItems="stretch"
					className={classes.headerGrid}
				>
					<Grid
						item
						container
						justify="center"
						alignItems="center"
						className={classes.logoGrid}
						xs={7}
						md={2}
						lg={1}
					>
						<img
							src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe"
							alt="logo"
							className={classes.logoImg}
						/>
					</Grid>
					<Hidden smDown>
						<Grid item className={classes.menuGrid} md={8} lg={9}>
							Menu{' '}
						</Grid>
					</Hidden>
					<Grid item className={classes.signBtnGrid} xs={5} md={2} lg={2}>
						<Button variant="contained" color="primary">
							Primary
						</Button>
					</Grid>
				</Grid>
				<Grid
					container
					justify="center"
					alignItems="center"
					className={classes.bodyGrid}
				>
					<Grid
						item
						xs={12}
						sm={10}
						md={8}
						lg={6}
						xl={4}
						className={classes.formGrid}
					></Grid>
				</Grid>
				<Grid container className={classes.footerGrid}></Grid>
				Container
			</Container>
		);
}
