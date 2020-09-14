import React from "react";
import { Tabs } from "antd";
import AllEvents from "./Board/AllEvents";
import Proud from "./Board/Proud";

const Board = () => {
  const { TabPane } = Tabs;
  return (
    <div className="row mb-5">
      <div className="col-lg-4 p-3">
        <Tabs defaultActiveKey="notice_board" size="large">
          <TabPane tab="Notice Board" key="Notice Board">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Upcoming Event" key="Upcomming Event">
            Content of Tab Pane 2
          </TabPane>
        </Tabs>
      </div>
      <div className="col-lg-4 proud p-3">
        <Proud />
      </div>
      <div className="col-lg-4 p-3">
        <AllEvents header={<h5>All Events</h5>} />
      </div>
    </div>
  );
};

export default Board;
