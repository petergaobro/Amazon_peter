/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../Header/Header.css'

function header() {
    return (
        <div className='header'>
            <img
                className="header_logo"
                src="https://pngimg.com/image/61249"
            />
            <div className="header_search">
                <input className="header_search_input" type="text"></input>
                {/* logo */}
            </div>

            <div className="header_nav">

            </div>
        </div>
    )
}

export default header
