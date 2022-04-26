import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';


const Nav = ({numberOfItems}) => {
    function openMenu(){
        document.body.classList += " menu--open";
    }

    function closeMenu(){
        document.body.classList.remove("menu--open");
    }

    return (
        <div>
            <div className="nav__container">
                <Link to="/" className='logo'>
                    <figure className="logo_fig">
                    <img src={logo} alt="" />
                    </figure>
                </Link>
                <ul className='nav__links'>
                    <li className='nav__list'>
                        <Link to="/" className='nav__link'>
                            Home
                        </Link>
                    </li>
                    <li className='nav__list'>
                        <Link to="/games" className='nav__link'>
                            Manga
                        </Link>
                    </li>
                    <button className='btn__menu' onClick={openMenu}>
                        <FontAwesomeIcon icon="bars" />
                    </button>
                    <li className='nav__icon'>
                        <Link to="/cart" className='nav__link shopping'>
                            <FontAwesomeIcon icon="shopping-cart"/>
                        </Link>
                        {
                            numberOfItems > 0 &&
                            <span className="cart__length">{numberOfItems}</span>
                        }
                    </li>
                </ul>
                <div className="menu__backdrop">
                    <button className="btn__menu btn__menu--close" onClick={closeMenu}>
                        <FontAwesomeIcon icon="times"/>
                    </button>
                    <ul className="menu__links">
                        <li className="menu__list">
                            <Link to="" className='menu__link' onClick={closeMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="menu__list">
                            <Link to="/games" className='menu__link' onClick={closeMenu}>
                                Games
                            </Link>
                        </li>
                        <li className="menu__list">
                            <Link to="/cart" className='menu__link' onClick={closeMenu}>
                                Cart
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Nav;
