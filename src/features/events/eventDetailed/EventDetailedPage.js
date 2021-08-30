import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import EventDetailChat from "./EventDetailChat";
import EventDetailHeader from "./EventDetailHeader";
import EventDetailInfor from "./EventDetailInfor";
import EventDetailSideBar from "./EventDetailSideBar";

const EventDetailedPage = () => {
  return (
    <Grid>
      <GridColumn width={10}>
        <EventDetailHeader />
        <EventDetailInfor />
        <EventDetailChat />
      </GridColumn>
      <GridColumn width={6}>
        <EventDetailSideBar />
      </GridColumn>
    </Grid>
  );
};

export default EventDetailedPage;
