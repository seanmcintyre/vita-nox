import React from 'react';
import styled from 'styled-components';

export const Venues = ({ events }) => (
  <>
    {Object.keys(events).map((venue: any, i) =>
      events[venue].length > 0 ? (
        <div key={i}>
          <h1>{venue}</h1>
          {events[venue] &&
            events[venue].map((event: any, i: number) => (
              <Event event={event} key={i} />
            ))}
        </div>
      ) : (
        <></>
      ),
    )}
  </>
);

const Event = ({ event }) => (
  <EventWrapper>
    <h2>{event.name}</h2>
    <h2>
      {new Date(event.start_time)
        .toLocaleString('en-US')
        .replace(':00:00', '')}
    </h2>
  </EventWrapper>
);

const EventWrapper = styled.div`
  padding: 1rem 2rem;
  border: 2px solid rgba(255, 255, 255, 0.8);
  border-radius: 0.25rem;
  display: inline-block;
  margin: 1rem 20rem 1rem 5rem;

  h2 {
    font-size: 1rem;
  }
`;
