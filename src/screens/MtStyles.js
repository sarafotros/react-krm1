import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import BtnStyled from '../components/BtnStyled'

const useStyles = makeStyles({
	root: {
        width: '100%',
        height: '100vh',
        padding: '40px',
        backgroundColor: 'rgba(152,251,152 ,1)',
        display: 'flex',
        flexDirection: 'column',
	},
});


export default function MtStyles() {
    const classes = useStyles()
    return (
			<div className={classes.root}>
				<BtnStyled>Sign Up</BtnStyled>
				<BtnStyled>Sign In</BtnStyled>
			</div>
		);
}
