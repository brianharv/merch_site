import React from "react";
import MerchList from "./MerchList";
import NewMerchForm from "./NewMerchForm";
import MerchDetail from './MerchDetail';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class MerchControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      formVisibleOnPage: false,
      selectedMerch: null
    };
  }

  handleClick = () => {
    if (this.state.selectedMerch != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedMerch: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewMerchToList = (newMerch) => {
    const { dispatch } = this.props;
    const { name, id, description, quantity, price } = newMerch;
    const action = {
      type: 'ADD_MERCH',
      name: name,
      description: description,
      quantity: quantity,
      price: price,
      id: id,
    }
    dispatch(action);
    this.setState({
      formVisibleOnPage: false,
      selectedMerch: null
    });  
  }
  


  handleUpdatingSelectedMerch = (id) => {
    const selectedMerch = this.props.masterMerchList[id];
    this.setState({ selectedMerch: selectedMerch })
  }

  handleDeletingSelectedMerch = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_MERCH',
      id: id
    }
    dispatch(action);
    this.setState({selectedMerch: null})
  }

  handleAddingQuantity = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'ADD_QUANTITY',
      id: id
    }
    dispatch(action)
  }

  handleSellingMerch = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'SELL_MERCH',
      id: id
    }
    dispatch(action);
  }



  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedMerch != null) {
      currentlyVisibleState = <MerchDetail merch={this.state.selectedMerch} onClickingDelete={this.handleDeletingSelectedMerch} onClickAddQuantity={this.handleAddingQuantity} onSellingOfMerch={this.handleSellingMerch} />
      buttonText = "Return to Merch List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewMerchForm onNewMerchCreation={this.handleAddingNewMerchToList} />
      buttonText = "Return to Merch List";
    } else {
      currentlyVisibleState = <MerchList merchList={this.props.masterMerchList} onMerchSelection={this.handleUpdatingSelectedMerch} />
      buttonText = "Add Item";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button className='btn btn-danger' onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

MerchControl.propTypes = {
  masterMerchList: PropTypes.object
}

const mapStateToProps = state => {
  return {
    masterMerchList: state
  }
}

MerchControl = connect(mapStateToProps)(MerchControl);

export default MerchControl;