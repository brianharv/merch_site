import React from "react";
import {v4} from 'uuid';
import PropTypes from "prop-types"

function NewMerchForm(props) {
  function handleNewMerchFormSubmission(event) {
    event.preventDefault();
    props.onNewMerchCreation({name: event.target.name.value, description: event.target.description.value, quantity: Number(event.target.quantity.value), price: Number(event.target.price.value), id: v4()});
  }
  return(
    <React.Fragment>
      <form onSubmit={handleNewMerchFormSubmission} className="form-group">
        <label for="item">Item Name</label>
        <input type='text'
        name='name'
        placeholder='Item Name' 
        className='form-control' />
        <label for="description">Item Description</label>
        <input type='text'
        name='description'
        placeholder='Item Description' 
        className='form-control' />
        <label for="price">Item Price</label>
        <input type='number'
        name='price'
        placeholder='Item Price' 
        className='form-control' />
        <label for="quantity">Item Quantity</label>
        <input type='number'
        name='quantity'
        placeholder='Item quantity' 
        className='form-control' />
        <br></br>
        <button className='btn btn-primary' type='submit'>Add Item</button>           
      </form>
    </React.Fragment>
  );
}
// THIS IS PROBABLY THE PROBLEM ^ or THIS BELOW >
NewMerchForm.propTypes = {
  onNewMerchCreation: PropTypes.func
}


export default NewMerchForm;