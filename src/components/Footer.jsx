import imagenes from '../assets/image';
import '../App.css';
import React from 'react'


function Footer(){
    return (
        <>
        <footer>
            <div>
                <img className='logo' src={imagenes[0]} alt='logo'/>
            </div>
        </footer>
        </>
        );
}

export default Footer;