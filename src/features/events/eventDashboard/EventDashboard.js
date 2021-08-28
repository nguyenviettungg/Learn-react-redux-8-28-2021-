import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import EventForm from "../eventForm/EventForm";
import EventList from "../eventList/EventList";
import { sampleData } from "../../../app/api/sampleData";

const EventDashboard = () => {
  return (
    <Grid>
      <GridColumn width="10">
        <EventList events={sampleData} />
      </GridColumn>
      <GridColumn width="6">
        <EventForm />
      </GridColumn>
    </Grid>
  );
};
export default EventDashboard;
