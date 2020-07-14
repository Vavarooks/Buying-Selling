import React from "react";
import Buy from "./Buypage";
import Seller from "./Sellerpage";
import Home from "./HomePage";

function Body() {
    return (
        <div>
            <body>
                <h1>Hello, world!</h1>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="buy-tab" data-toggle="tab" href="#buy" role="tab" aria-controls="buy" aria-selected="false">Buy</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="sell-tab" data-toggle="tab" href="#sell" role="tab" aria-controls="sell" aria-selected="false">Sell</a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"><Home/></div>
                    <div className="tab-pane fade" id="buy" role="tabpanel" aria-labelledby="buy-tab"><Buy/></div>
                    <div className="tab-pane fade" id="sell" role="tabpanel" aria-labelledby="sell-tab"><Seller/></div>
                </div>

            </body>

        </div>
    );
}


export default Body;