import React from "react";
import { Col, Card } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";

const Menus = ({ menu, masukKeranjang }) => {
  
  return (
    <Col md={4} xs={6} className="mb-4">
      <Card className="shadow" onClick={() => masukKeranjang(menu)}>
        {/* <Card.Img
          variant="top"
          src={
            "assets/images/" +
            menu.category.name.toLowerCase() +
            "/" +
            menu.gambar
          }
        /> */}
        <Card.Body>
          <Card.Title>{menu.name}</Card.Title>
          <Card.Text>Rp. {numberWithCommas(menu.price)}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Menus;
