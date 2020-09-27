import {Checkbox, Menu} from "antd";
import React from "react";

const Filter = (
  <Menu>
    <Menu.Item>
      <Checkbox>Subscribers</Checkbox>
    </Menu.Item>
    <Menu.Item>
      <Checkbox>Country</Checkbox>
    </Menu.Item>
  </Menu>
);

export default Filter;
