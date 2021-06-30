/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
// import '../';
import '../Header/Header.css';
import '../Home/Home.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
function header() {
    return (
        <div className='header'>
            <img
                className="header_logo"
                src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
            />
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
                <div className="header_optionBasket">
                    <ShoppingCartIcon />
                    <span className='header_optionLinkTwo header_basketCount'>
                        0
                    </span>
                </div>
            </div>
        </div>
    )
}

export default header
