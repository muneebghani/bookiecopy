import React from 'react';
import Styles from './Header.Styles.scss';
import logo from './logo.png';
import searchIcon from './search-icon.png';

const Header = () => {
		return (
				<div className="container center">
        <nav className="menu">
            <h1 style={{
            	backgroundImage: 'url(' + logo + ')'
            }} className="menu__logo">Bookie</h1>

            <div className="menu__right">
                <ul className="menu__list">
                    <li className="menu__list-item"><a className="menu__link menu__link--active" href="#">Home</a></li>
                    <li className="menu__list-item"><a className="menu__link" href="#">About</a></li>
                    <li className="menu__list-item"><a class="menu__link" href="#">Return</a></li>
                    <li className="menu__list-item"><a className="menu__link" href="#">Contact</a></li>
                </ul>

                <button style={{
                	backgroundImage: 'url(' + searchIcon + ')'
                }} className="menu__search-button"></button>

                <form className="menu__search-form hide" method="POST">
                    <input className="menu__search-input" placeholder="Search..."/>
                </form>
            </div>
        </nav>
    </div>
			);
}

export default Header;