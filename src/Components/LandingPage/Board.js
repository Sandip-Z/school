import React from "react";
import { Tabs } from "antd";

const Board = () => {
  const { TabPane } = Tabs;
  return (
    <div className="row">
      <div className="col-lg-4 m-3">
        <Tabs defaultActiveKey="notice_board">
          <TabPane tab="Notice Board" key="Notice Board">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Upcoming Event" key="Upcomming Event">
            Content of Tab Pane 2
          </TabPane>
        </Tabs>
      </div>
      <div className="col-lg-4 m-3">proub</div>
      <div className="col-lg-4 m-3"></div>
    </div>
  );
};

export default Board;
