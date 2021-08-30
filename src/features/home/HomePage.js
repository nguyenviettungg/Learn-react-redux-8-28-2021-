import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Header,
  Icon,
  Image,
  Segment,
} from "semantic-ui-react";

const HomePage = ({ history }) => {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container>
        <Header as="h1" inverted>
          <Image
            size="massive"
            src="%PUBLIC_URL%/../assets/logo.png"
            style={{ marginBottom: 12 }}
          />{" "}
          E-vents
        </Header>
        <Button onClick={() => history.push("/events")} size="huge" inverted>
          Start
          <Icon name="right arrow" />
        </Button>
      </Container>
    </Segment>
  );
};

export default HomePage;
