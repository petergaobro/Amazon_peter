/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
// import '../';
import './Header.css';
import '../Home/Home.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";
function header() {
    return (
        <div className='header'>
            <Link to="/">
                <img
                    className="header_logo"
                    src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
                />
            </Link>

            <div className="header_search">
                <input className="header_searchInput" type="text"></input>
                <SearchIcon className="header_searchIcon" />
                {/* logo */}
            </div>

            <div className="header_nav">
                <div className='header_option'>
                    <span className='header_optionLinkOne'>
                        Hello Guest
                    </span>
                    <span className='header_optionLinkTwo'>
                        Sign in
                    </span>
                </div>

                <div className='header_option'>
                    <span className='header_optionLinkOne'>
                        Returns
                    </span>
                    <span className='header_optionLinkTwo'>
                        Orders
                    </span>
                </div>

                <div className='header_option'>
                    <span className='header_optionLinkOne'>
                        Your
                    </span>
                    <span className='header_optionLinkTwo'>
                        Prime
                    </span>
                </div>
                <Link to="/checkout">
                    <div className="header_optionBasket">
                        <ShoppingCartIcon />
                        <span className='header_optionLinkTwo header_basketCount'>
                            0
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default header
