import React from "react";
import { Button, Container, Menu, MenuItem } from "semantic-ui-react";

export default function NavBar() {
  return (
    <Menu inverted fixed="top" className="menu-custom">
      <Container>
        <MenuItem header>
          <img
            src="%PUBLIC_URL%/../assets/logo.png"
            alt="logo"
            style={{ marginRight: "15px" }}
          />{" "}
          E-vents
        </MenuItem>
        <Menu.Item name="Events" />
        <MenuItem>
          <Button positive inverted content="Create Event" />
        </MenuItem>
        <MenuItem position="right">
          <Button basic inverted content="Login" className='btn-custom'/>
          <Button
            basic
            inverted
            content="Register"
            style={{ marginLeft: "0.5em" }}
          />
        </MenuItem>
      </Container>
    </Menu>
  );
}
