import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import BtnStyled from '../components/BtnStyled'

const useStyles = makeStyles({
	root: {
        width: '100%',
        height: '100vh',
        padding: '40px',
        backgroundColor:  props =>props.backgroundColor,
        display: 'flex',
        flexDirection: 'column',
        "& p": {
           fontSize: 24     
        }
        
	},
});


export default function MtStyles() {
        const props = { backgroundColor: 'rgba(152,251,152 ,1)'}
    const classes = useStyles()
    return (
            <div className={classes.root}>
                <p>this is a p tag</p>
                <BtnStyled>Sign Up</BtnStyled>
                <BtnStyled>Sign In</BtnStyled>
        </div>
);
}
