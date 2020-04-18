import React from 'react';

class Product extends React.Component {
    state = {  }
    render() { 
     return (
        <div style={{ width: 250, height: 300, border: '1px solid #e1e1e1', display:'flex' , flexDirection:'column', alignItems:'center', marginTop:20}}>
            <img
                src={this.props.image}
                alt="log" style={{ width:'100%', height: 200,}}
            />
        <h4>{this.props.title}</h4>
        <span>Price: {this.props.price}</span>
        </div>
     );
    }
}
 
export default Product;