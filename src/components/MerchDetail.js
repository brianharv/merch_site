import React from 'react';
import PropTypes from "prop-types";

function MerchDetail(props){
  const { merch, onClickingDelete } = props;
  return(
    <React.Fragment>
      <h3>Merch Detail</h3>
      <br></br>
      <h2> {merch.description} - {merch.name} </h2>
      <h2> Quantity: {merch.quantity}</h2>
      <br></br>
      <br></br>
      <p>Price: ${merch.price} </p>
      <button className='btn btn-primary' onClick={()=> onClickingDelete(merch.id)}>Delete this Merch!</button>
    </React.Fragment>
  );
}

MerchDetail.propTypes = {
  Merch: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default MerchDetail;