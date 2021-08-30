import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Button, Container, Menu, MenuItem } from "semantic-ui-react";
import SingedInMenu from "./SingedInMenu";
import SingedOutMenu from "./SingedOutMenu";

export default function NavBar({ setFormOpen }) {
  const history = useHistory();
  const [authenticated, setAuthenticated] = useState(false);

  function handleSingout() {
    setAuthenticated(false);
    history.push("/");
  }

  return (
    <Menu inverted fixed="top" className="menu-custom">
      <Container>
        <MenuItem as={NavLink} to="/" exact header>
          <img
            src="%PUBLIC_URL%/../assets/logo.png"
            alt="logo"
            style={{ marginRight: "15px" }}
          />
          E-vents
        </MenuItem>
        <Menu.Item as={NavLink} to="/events" name="Events" />
        {authenticated && (
          <MenuItem as={NavLink} to="/createEvent">
            <Button positive inverted content="Create Event" />
          </MenuItem>
        )}
        {authenticated ? (
          <SingedInMenu
            
            signOut={handleSingout}
          />
        ) : (
          <SingedOutMenu setAuthenticated={setAuthenticated} />
        )}
      </Container>
    </Menu>
  );
}
