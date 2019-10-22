import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <div className='nav-bar'>
                <div className="center">
                    <nav className="menu">
                        <h1 className="menu__logo">Body In Balance</h1>
                        <div className="menu__right">
                            <ul className="menu__list">
                                <li className="menu__list-item"><a className="menu__link menu__link--active" href="/">Home</a></li>
                                <li className="menu__list-item"><a className="menu__link" href="/about">About</a></li>
                                <li className="menu__list-item"><a className="menu__link" href="/contact">Contact</a></li>
                                <li className="menu__list-item"><a className="menu__link" href="/services">Services</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
                )
            }
        }
        
export default NavBar;