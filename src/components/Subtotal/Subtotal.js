import React from 'react'
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
function Subtotal() {
    return (
        <div className="subtotal_container">
            <CurrencyFormat>
                renderText={(value) => (
                    
                )}
            </CurrencyFormat>
        </div>
    )
}

export default Subtotal
