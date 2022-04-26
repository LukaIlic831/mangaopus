import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row row__column">
                    <Link to="/" className='footer__icon'>
                    <img src={logo} alt="" />
                    </Link>
                    <div className="footer__list">
                        <Link to="/" className='footer__link'>Home</Link>
                        <span href="/" className='footer__link no-cursor'>About</span>
                        <Link to="/games" className='footer__link'>Manga</Link>
                        <Link to="/cart" className='footer__link'>Cart</Link>
                    </div>
                    <div className="footer__copyright">
                        Copyright &copy; 2021 MangaOpus
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
