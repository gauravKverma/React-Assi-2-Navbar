import React from "react";


var button={
    padding: '15px',
    borderRadius: '15px',
    backgroundColor: 'cyan',
    height: '20px',
    width: '10%',
    marginTop: '25px',
    display: 'flex',
    textAlign:'center',
    alignItems:'center',
    justifyContent: 'center',
    border: 'none',
    color: 'grey',
    fontSize: '15px'
}

const Button = () => {
    return <button style={button}>Contact</button>
}

export default Button;