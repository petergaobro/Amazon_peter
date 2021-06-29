import React from 'react'
import "../Home/Home.css";
import Product from "../Product/Product";
function Home() {
    return (
        <div className="Home ">
            <div className="home_container">
                <img className="home_image" src="https://m.media-amazon.com/images/I/61ZwsIohUaL._SX1500_.jpg" alt=""></img>
            </div>
            <div className="home_row">
                <Product />
                <Product />
            </div>
            <div className="home_row">
                {/* product */}
                {/* product */}
                {/* product */}
            </div>
            <div className="home_row">
                {/* product */}
            </div>
        </div>
    )
}

export default Home
