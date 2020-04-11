import React from 'react'
class MyInput extends React.Component {
    state = { 
        error: false,
        email: ''
    }
    
    render() { 
        let regex = this.props.regex
        let errorText =  this.props.errorText
        return ( 
            <div style={{ color: 'black', width: '100%', padding:15, display: 'flex', justifyContent:'center', alignItems: 'center',flexDirection: 'column' }}>
                <input onBlur={(e) => {
                    let value = e.target.value
                    let emailregex = regex
                    this.setState({
                        error: !emailregex.test(value),
                        email: value
                    })
                    console.log(value);
                    console.log(this.state.email)

                }}
                style={{ width: '80%', border: 'none', borderBottom: '1px solid #000' }} type='text' placeholder='input...'></input>
                {this.state.error ? (<span style={{ color: 'red', fontSize: 12, marginTop: 5 }}>{errorText}</span>) : (null)}
               
            </div>
         );
    }
}
 
export default MyInput;