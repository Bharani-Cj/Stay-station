import React from "react";
import { Avatar, Menu } from "@mantine/core";

const UserLogo = () => {
  function handleLogOut() {
    window.localStorage.removeItem("user");
    window.location.reload();
  }
  return (
    <Menu>
      <Menu.Target>
        <Avatar alt="userImage" radius={"xl"} />
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item onClick={handleLogOut}>Logout</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default UserLogo;
