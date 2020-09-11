import React from "react";
import { Tabs } from "antd";

const Board = () => {
  const { TabPane } = Tabs;
  return (
    <div className="row">
      <div className="col-lg-4">
        <Tabs defaultActiveKey="notice_board">
          <TabPane tab="notice_board" key="Notice Board">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="upcoming_event" key="Upcomming Event">
            Content of Tab Pane 2
          </TabPane>
        </Tabs>
      </div>
      <div className="col-lg-4">proub</div>
      <div className="col-lg-4">events</div>
    </div>
  );
};

export default Board;
