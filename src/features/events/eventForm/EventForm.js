import cuid from "cuid";
import React, { useState } from "react";
import { Button, Form, FormField, Header, Segment } from "semantic-ui-react";

const EventForm = ({ setFormOpen, setEvents, createEvent, selectedEvent }) => {
  const initialValues = selectedEvent ?? {
    // ?? - null conditional operator :if left null set right value
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };
  const [values, setValues] = useState(initialValues);
  function handleFormSubmit() {
    createEvent({
      ...values,
      id: cuid(),
      hostedBy: "Beep",
      attendees: [],
      hostPhotoURL: "%PUBLIC_URL%/../assets/user.png",
    });
    setFormOpen(false);
  }
  function handleInputChange(e) {
    const { name, value } = e.target; // e.target.name , e.target.value
    setValues({ ...values, [name]: value }); // ...values = initialValues
  }
  return (
    <Segment clearing>
      <Header content={selectedEvent ? "Edit the event" : "Create new event"} />
      <Form onSubmit={handleFormSubmit}>
        <FormField>
          <input
            type="text"
            placeholder="Event title"
            name="title"
            value={values.title} // value = setValues([e.target.name]:e.target.value )
            onChange={(e) => handleInputChange(e)} // e.target.name = title , [title] = e.target.value
          />
        </FormField>
        <FormField>
          <input
            type="text"
            placeholder="Category"
            name="category"
            value={values.category}
            onChange={(e) => handleInputChange(e)}
          />
        </FormField>
        <FormField>
          <input
            type="text"
            placeholder="Description"
            name="description"
            value={values.description}
            onChange={(e) => handleInputChange(e)}
          />
        </FormField>
        <FormField>
          <input
            type="text"
            placeholder="City"
            name="city"
            value={values.city}
            onChange={(e) => handleInputChange(e)}
          />
        </FormField>
        <FormField>
          <input
            type="text"
            placeholder="Venue"
            name="venue"
            value={values.venue}
            onChange={(e) => handleInputChange(e)}
          />
        </FormField>
        <FormField>
          <input
            type="date"
            placeholder="Date"
            name="date"
            value={values.date}
            onChange={(e) => handleInputChange(e)}
          />
        </FormField>
        <Button type="submit" floated="right" positive content="Submit" />
        <Button
          onClick={() => {
            setFormOpen(false);
          }}
          type="submit"
          floated="right"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
};

export default EventForm;
