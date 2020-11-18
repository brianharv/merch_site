import React from 'react';
import PropTypes from "prop-types";

function MerchDetail(props){
  const { merch } = props;
  return(
    <React.Fragment>
      <h3>Merch Detail</h3>
      <br></br>
      <h2> {merch.description} - Name {merch.name} </h2>
      <h2> Quantity: {merch.quantity}</h2>
      <br></br>
      <br></br>
      <p>{merch.price} </p>
    </React.Fragment>
  );
}

MerchDetail.propTypes = {
  Merch: PropTypes.object
};

export default MerchDetail;