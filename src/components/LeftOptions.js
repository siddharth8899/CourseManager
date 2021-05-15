import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';

const LeftOptions = (props) => {
  return (
    <ListGroup>
      <Link className="list-group-item list-group-item-action" tag="a" to="/home">HOME</Link>
      <Link className="list-group-item list-group-item-action" tag="a" to="/add">ADD COURSE</Link>
      <Link className="list-group-item list-group-item-action" tag="a" to="/view">VIEW COURSE</Link>
      <Link className="list-group-item list-group-item-action" tag="a" to="#">ABOUT US</Link>
      <Link className="list-group-item list-group-item-action" tag="a" to="#">CONTACT US</Link>
    </ListGroup>
  );

}

export default LeftOptions;