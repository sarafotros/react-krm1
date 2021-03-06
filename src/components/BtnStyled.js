import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const BtnStyled = styled(({ btnSize, ...others }) => <Button {...others}/>)({
	background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
	border: 0,
	borderRadius: 3,
	boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
	color: 'white',
    height: props => props.btnSize === 'sm' ? 30: 48,
    width: '190px',
    padding: '0 30px',
    marginTop: '15px'
});
export default BtnStyled