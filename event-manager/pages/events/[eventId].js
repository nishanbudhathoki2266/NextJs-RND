import EventContent from "@/components/eventDetail/EventContent";
import EventLogistics from "@/components/eventDetail/EventLogistics";
import EventSummary from "@/components/eventDetail/EventSummary";
import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";
import React, { Fragment } from "react";

const EventDetailPage = () => {
  const router = useRouter();
  const event = getEventById(router.query.eventId);
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

export default EventDetailPage;
