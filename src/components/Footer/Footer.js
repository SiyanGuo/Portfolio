import React from 'react';

const Footer = () => {
    var style = {
        backgroundColor: "#F8F8F8",
        borderTop: "1px solid #E7E7E7",
        textAlign: "center",
        padding: "20px",
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "60px",
        width: "100%",
    }

    var phantom = {
        display: 'block',
        padding: '20px',
        height: '60px',
        width: '100%',
    }

    return (

        <footer style={phantom}>
            <div stype={style}>
                <p>Code with 🧡  by Siyan Serena Guo</p>
            </div>
        </footer>
    )
};

export default Footer;