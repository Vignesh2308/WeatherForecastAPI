import React from 'react'

function Header(){
    return(
        <React.Fragment>
                <nav className="navbar navbar-light fixed-top " id='header'>
                    <a className="navbar-brand" href=".">
                        <img src="logo192.png" width="30" height="30" className="d-inline-block align-top" alt="Logo" />&nbsp;
                        <strong className='text-primary'>The Weather Forecast</strong>
                    </a>     
                </nav>
            
        </React.Fragment>
    );
}

export default Header;
