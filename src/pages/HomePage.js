import React from "react";
import Body from "./Body";


function Home() {
  return (
    <div>
        <h1>
                Evelny's Art Gallary
                </h1>
            <div className="alert alert-success" role="alert">
                Buy the art here! See all the prices!
            </div>
            <Body></Body>
    </div>
  );
}


export default Home;