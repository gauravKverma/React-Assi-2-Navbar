import React from "react";


var linkStyle = {
    display: 'flex',
    gap: '0px',
    alignItems: 'center',
    justifyContent:'left'
}



const Links = ({info}) => {
    return (
    <div style={linkStyle}>
        <p>{info}</p>
    </div>
    )
}

export default Links;