import React from "react";
import { Col, Card } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
import { API_URL } from "../utils/constants";

const Menus = ({ menu, masukKeranjang }) => {
  const imgUrl = menu?.image ? `${API_URL}${menu.image}` : "assets/images/default.png";
  return (
    <Col md={4} xs={6} className="mb-4">
      <Card className="shadow" onClick={() => masukKeranjang(menu)}>
        <Card.Img variant="top" src={imgUrl} alt={menu.name} />
        <Card.Body>
          <Card.Title>{menu.name}</Card.Title>
          <Card.Text>Rp. {numberWithCommas(menu.price)}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Menus;
