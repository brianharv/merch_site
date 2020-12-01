import React from "react";
import Merch from "./Merch";
import PropTypes from "prop-types";


function MerchList(props) {
  return(
    <React.Fragment>
      {Object.values(props.merchList).map((merch) =>
        <Merch name={merch.name} 
          whenMerchClicked = {props.onMerchSelection}
          description={merch.description}
          price={merch.price}
          quantity={merch.quantity}
          id={merch.id} 
          key = {merch.key}/>
      )}
    </React.Fragment>
  );
}

MerchList.propTypes = {
  merchList: PropTypes.object,
  onMerchSelection: PropTypes.func
}

export default MerchList;