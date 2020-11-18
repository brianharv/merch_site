import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import { ListGroup, ListGroupItem } from "react-bootstrap";

function Merch(props) {
  return(
    <React.Fragment>
    <div onClick = {() => props.whenMerchClicked(props.id)}>
    <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"><b>Price</b> - ${props.price}</Card.Subtitle>
          <Card.Text>
            <b>Description</b> - {props.description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem><b>Quantity</b>: {props.quantity}</ListGroupItem>
          {/* <ListGroupItem>{props.id}</ListGroupItem> */}
          </ListGroup>
          {/* <Card.Link href="#">Another Link</Card.Link> */}
        </Card> 
    </div>
    </React.Fragment>
  );
}

Merch.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.number,
  price:PropTypes.number,
  id: PropTypes.string,
  whenMerchClicked: PropTypes.func
}


export default Merch;




