import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import BtnStyled from '../components/BtnStyled'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles( theme =>({
  root: {
        width: '70%',
        height: '100vh',
        padding: '40px',
        background:  theme.background,
        display: 'flex',
        flexDirection: 'column',
        "& p": {
           fontSize: 24     
        }
        
   },
}));


export default function MtStyles() {
        const props = { status: 1 }
        const classes = useStyles(props)
        const theme = useTheme()
    return (
			<div className={classes.root}>
				{/* <p style={{background: theme.background}}>this is a p tag</p> */}
				{/* <BtnStyled btnSize='sm'>Sign Up</BtnStyled>
                <BtnStyled>Sign In</BtnStyled> */}
				<Typography fontSize>This is a typography</Typography>
				<Button variant="contained" color="secondary">
					THis Button
				</Button>
				<Button variant="contained" color="primary">
					THis Button
				</Button>
			</div>
		);
}
