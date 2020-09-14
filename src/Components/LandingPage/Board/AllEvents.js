import React from "react";
import { List, Typography } from "antd";

const AllEvents = ({ header }) => {
  const { Item } = List;
  const data = [
    { type: "Exam", message: "All Exams are cancelled." },
    { type: "Regular", message: "Holiday from tomorrow." },
    { type: "Blog", message: "Everybody is good to go." },
    { type: "Regular", message: "Holiday from tomorrow." },
    { type: "Blog", message: "Everybody is good to go." },
  ];
  return (
    <List
      size="large"
      header={header}
      footer={<div className="d-flex justify-content-end pr-2">Read More</div>}
      //   bordered
      dataSource={data}
      renderItem={(item) => (
        <Item>
          <Typography.Text mark>{`${item.type}`}</Typography.Text>
          {` ${item.message}`}
        </Item>
      )}
    />
  );
};

export default AllEvents;
