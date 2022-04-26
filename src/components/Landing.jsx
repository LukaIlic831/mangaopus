import React from 'react';
import GamingImg from '../assets/undraw_gaming_re_cma2.svg'
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <section id="landing">
            <header>
                <div className="header__container">
                    <div className="header__description">
                        <h1>The most searched online Manga platform</h1>
                        <h2>Find your dream Manga with <span className='purple'>Manga Opus</span></h2>
                        <Link to="/games">
                            <button className='btn'>Browse Manga</button>
                        </Link>
                    </div>
                    <figure className='header__img--wrapper'>
                        <img src={GamingImg} className="header__img" alt="" />
                    </figure>
                </div>
            </header>
        </section>
    );
}

export default Landing;
