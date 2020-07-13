import React from "react";


function Seller() {
    return (
        <div>
            <div class="jumbotron">
            <label for="basic-url">Your Image URL</label>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
                </div>
                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
            </div>
            </div>
        </div>
    );
}


export default Seller;