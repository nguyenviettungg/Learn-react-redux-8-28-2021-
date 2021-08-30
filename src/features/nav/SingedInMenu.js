import React from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Image,
  MenuItem,
} from "semantic-ui-react";

const SingedInMenu = ({ signOut }) => {
  return (
    <MenuItem position="right">
      <Image avatar spaced="right" src="%PUBLIC_URL%/../assets/user.png" />
      <Dropdown pointing="top left" text="Bob">
        <DropdownMenu>
          <DropdownItem
            as={Link}
            to="/createEvent"
            text="Create Event"
            icon="plus"
          />
          <DropdownItem text="My profile" icon="user" />
          <DropdownItem
            text="Sing out"
            icon="power"
            onClick={signOut}
          />
        </DropdownMenu>
      </Dropdown>
    </MenuItem>
  );
};

export default SingedInMenu;
