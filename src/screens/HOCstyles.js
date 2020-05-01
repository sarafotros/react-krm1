import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';



const styles = {
	root: {
		width: '100%',
		height: '100vh',
		padding: '40px',
		backgroundColor: 'rgba(25,15,210 ,0.6)',
		display: 'flex',
		flexDirection: 'column',
	},
};

const HOCstyles = (props) => {

    const { classes} = props
    return <div className={classes.root}>
     HOC  
    </div>;
}


// class HOCstyles extends Component {

    
//     render() {
//         const classes = this.props.classes
//         return (
//             <div className={classes.root}>
//                 HOC
//             </div>
//         )
//     }
// }

export default withStyles(styles)(HOCstyles)