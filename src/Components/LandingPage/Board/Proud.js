import React from "react";
import { List, Card } from "antd";
import ruby from "../../../Asset/ruby.jpg";
import ranjan from "../../../Asset/ranjan.jpg";
import sagar from "../../../Asset/sagar.jpg";
import manisha from "../../../Asset/manisha.jpg";
import sanjay from "../../../Asset/sanjay.jpg";

const Proud = () => {
  const { Item } = List;
  const { Meta } = Card;
  const data = [
    { name: "Ruby Koju", image: ruby, gpa: 4.0 },
    { name: "Ranjan Shrestha", image: ranjan, gpa: 3.5 },
    { name: "Sagar Pandit", image: sagar, gpa: 4.0 },
    { name: "Manisha Suwal", image: manisha, gpa: 4.0 },
    { name: "Sanjay Shrestha", image: sanjay, gpa: 3.5 },
  ];
  return (
    <List
      size="large"
      header={<h5>We feel proud of</h5>}
      dataSource={data}
      renderItem={(item) => {
        return (
          <Item className="d-flex">
            <Card
              hoverable
              style={{ width: 180 }}
              cover={<img src={item.image} />}
            >
              <Meta title={item.name} description={`GPA: ${item.gpa}`} />
            </Card>
          </Item>
        );
      }}
    ></List>
  );
};

export default Proud;
