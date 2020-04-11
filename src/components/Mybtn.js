import React, { Component } from 'react';


class Mybtn extends Component {
  
    render() { 
        const bg = this.props.bg!= null ? this.props.bg : '#BDBDBD' 
        const title= this.props.title;
    return (
                <button
                    style={{
                        width: 120,
                        height: 45,
                        fontFamily: '"Baloo 2" ,cursive',
                        backgroundColor: bg,
            }}
            onClick={this.props.onClick}
                >
                    {title}
                </button>
            );
    }
}
 
export default Mybtn;