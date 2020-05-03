import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import BtnStyled from '../components/BtnStyled'

const useStyles = makeStyles( theme =>({
  root: {
        width: '100%',
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
                <p style={{background: theme.background}}>this is a p tag</p>
                {/* <BtnStyled btnSize='sm'>Sign Up</BtnStyled>
                <BtnStyled>Sign In</BtnStyled> */}
        </div>
);
}
