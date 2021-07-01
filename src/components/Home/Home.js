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
                {/* <Product /> */}
                <Product
                    id="21345"
                    title="The lean starup"
                    price={29.99}
                    image="https://images-fe.ssl-images-amazon.com/images/G/35/dex/2020/XCM_Manual_1221983_1157171_FR_dex_it_free_shipping_379x304_8f45ac54-8355-4883-ac32-14596176be39._SY304_CB413288296_.jpg"
                    rating={3} />

                <Product
                    id="345624"
                    title="The lean starup"
                    price={293.99}
                    image="https://images-fe.ssl-images-amazon.com/images/G/35/dex/2020/XCM_Manual_1221983_1157171_FR_dex_it_free_shipping_379x304_8f45ac54-8355-4883-ac32-14596176be39._SY304_CB413288296_.jpg"
                    rating={3} />
            </div>
            <div className="home_row">
                <Product
                    id="345624"
                    title="The lean starup"
                    price={293.99}
                    image="https://images-fe.ssl-images-amazon.com/images/G/35/dex/2020/XCM_Manual_1221983_1157171_FR_dex_it_free_shipping_379x304_8f45ac54-8355-4883-ac32-14596176be39._SY304_CB413288296_.jpg"
                    rating={3} />
                <Product
                    id="345624"
                    title="The lean starup"
                    price={293.99}
                    image="https://images-fe.ssl-images-amazon.com/images/G/35/dex/2020/XCM_Manual_1221983_1157171_FR_dex_it_free_shipping_379x304_8f45ac54-8355-4883-ac32-14596176be39._SY304_CB413288296_.jpg"
                    rating={3} />
                <Product
                    id="345624"
                    title="The lean starup"
                    price={293.99}
                    image="https://images-fe.ssl-images-amazon.com/images/G/35/dex/2020/XCM_Manual_1221983_1157171_FR_dex_it_free_shipping_379x304_8f45ac54-8355-4883-ac32-14596176be39._SY304_CB413288296_.jpg"
                    rating={3} />
            </div>
            <div className="home_row">
                <Product
                    id="345624"
                    title="The lean starup"
                    price={293.99}
                    image="https://images-fe.ssl-images-amazon.com/images/G/35/dex/2020/XCM_Manual_1221983_1157171_FR_dex_it_free_shipping_379x304_8f45ac54-8355-4883-ac32-14596176be39._SY304_CB413288296_.jpg"
                    rating={3} />
                {/* <Product /> */}
                {/* <Product /> */}
            </div>
        </div>
    )
}

export default Home
