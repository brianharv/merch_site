import React from "react";
import MerchControl from "./MerchControl";
import Splash from "./Splash";

function Body() {
  return(
    <React.Fragment>
      <div className="row">
        <div className="col">
          <MerchControl />
        </div>
        <div className="col">
          <Splash />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Body;