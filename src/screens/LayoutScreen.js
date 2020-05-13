import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container, Grid, Hidden } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import StepperScreen from '../screens/StepperScree' 

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
	logoGrid: {},
	menuGrid: {
		'& button:first-child': {
			border: 'none',
		},
	},
	signBtnGrid: {
		// backgroundColor: 'lightCoral',
	},
	formGrid: {
		height: 400,
		// backgroundColor: '#BBDEFB',
	},
	logoImg: {
		width: 80,
	},
	menuItemLink: {
		paddingRight: theme.spacing(5),
		paddingLeft: theme.spacing(5),
		borderLeftColor: '#ccc',
		borderLeftStyle: 'solid',
		borderLeftWidth: 1,
		'&:hover': {
			textDecoration: 'none',
			color: 'white',
		},
	},
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
						<Grid
							item
							container
							alignItems="center"
							// justify="
							className={classes.menuGrid}
							md={8}
							lg={9}
						>
							<Link
								component="button"
								variant="body2"
								className={classes.menuItemLink}
							>
								Main Page
							</Link>
							<Link
								component="button"
								variant="body2"
								className={classes.menuItemLink}
							>
								Contact Us
							</Link>
							<Link
								component="button"
								variant="body2"
								className={classes.menuItemLink}
							>
								Courses
							</Link>
							<Link
								component="button"
								variant="body2"
								className={classes.menuItemLink}
							>
								About Us
							</Link>
						</Grid>
					</Hidden>
					<Grid
						item
						container
						justify="center"
						alignItems="center"
						className={classes.signBtnGrid}
						xs={5}
						md={2}
						lg={2}
					>
						<Button color="secondary">Login</Button>
						<Typography>/</Typography>
						<Button color="secondary">Sign up</Button>
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
					>
						<StepperScreen />
					</Grid>
				</Grid>
				<Grid container className={classes.footerGrid}></Grid>
				Container
			</Container>
		);
}
