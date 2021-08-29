import React from "react";
import {
  Button,
  Icon,
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemImage,
  List,
  Segment,
} from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

const EventListItem = ({ event, selectEvent }) => {
  return (
    <Segment.Group>
      <Segment>
        <ItemGroup>
          <Item>
            <ItemImage
              size="tiny"
              circular
              src={event.hostPhotoURL}
            ></ItemImage>
            <ItemContent>
              <ItemHeader content={event.title}></ItemHeader>
              <ItemDescription>Hosted by {event.hostedBy}</ItemDescription>
            </ItemContent>
          </Item>
        </ItemGroup>
      </Segment>
      <Segment>
        <span style={{ display: "inline-block", marginRight: "1em" }}>
          <Icon name="clock" style={{ marginRight: "1px" }} /> {event.date}
        </span>
        <span>
          <Icon name="marker" style={{ marginRight: "1px" }} /> {event.venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {event.attendees.map((attendee) => (
            <EventListAttendee attendee={attendee} key={attendee.id} />
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <div>{event.description}</div>
        <Button
          onClick={() => selectEvent(event)}
          color="teal"
          floated="right"
          content="View"
        />
      </Segment>
    </Segment.Group>
  );
};

export default EventListItem;
