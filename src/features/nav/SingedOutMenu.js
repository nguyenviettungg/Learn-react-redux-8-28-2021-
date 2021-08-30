import React from "react";
import { Button, MenuItem } from "semantic-ui-react";

const SingedOutMenu = ({ setAuthenticated }) => {
  return (
    <MenuItem position="right">
      <Button
        onClick={() => setAuthenticated(true)}
        basic
        inverted
        content="Login"
        className="btn-custom"
      />
      <Button
        basic
        inverted
        content="Register"
        style={{ marginLeft: "0.5em" }}
      />
    </MenuItem>
  );
};

export default SingedOutMenu;
