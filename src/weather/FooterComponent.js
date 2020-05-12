import React from 'react'

function Footer(){
    return(
        <React.Fragment>
            <div id='foot'>
            <strong>Developed By Vignesh</strong> &nbsp; &nbsp; 
            <a href='https://www.facebook.com/vignesh.parker.7/'>
                <img className='icon' src='https://i.pinimg.com/originals/b7/63/69/b763699fd1fa3bfb374442593ae642e1.png' width="30" height="30" alt='fb'></img></a>
                &nbsp; &nbsp; 
            <a href='https://www.linkedin.com/in/vignesh-ravichandran-2822701a2/'>
                <img className='icon' src='https://cdn3.iconfinder.com/data/icons/address-book-providers-in-black-white/512/linkedin-512.png' width="30" height="30" alt='linkedin'></img></a>
            </div>
        </React.Fragment>
    );
}

export default Footer;