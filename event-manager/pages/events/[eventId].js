import EventContent from "@/components/eventDetail/EventContent";
import EventLogistics from "@/components/eventDetail/EventLogistics";
import EventSummary from "@/components/eventDetail/EventSummary";
import ErrorAlert from "@/components/ui/ErrorAlert";
import { getEventById, getAllEvents } from "./../../helpers/api-util";
import React, { Fragment } from "react";

const EventDetailPage = (props) => {
  const event = props.selectedEvent;

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>;
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event,
    },
  };
}

export async function getStaticPaths() {
  const events = await getAllEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));
  return {
    paths: paths,
    fallback: false,
  };
}

export default EventDetailPage;
