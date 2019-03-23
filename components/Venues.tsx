import React from 'react';
import styled from 'styled-components';

export const Venues = ({ data }) => (
  <>
    <h1>Upcoming</h1>

    {Venue(data).map((venue, i) => (
      <div key={i}>
        <h2 style={{ color: 'rgb(220,50,70)' }}>{venue}</h2>
        {data[venue] && data[venue].events && (
          <Events events={data[venue].events} />
        )}
      </div>
    ))}
  </>
);

const Venue = events =>
  Object.keys(events).map(
    (venue: any) => events[venue].events.length > 0 && venue,
  );

const Events = ({ events }) => (
  <>
    {events.slice(0, 5).map((event, i) => (
      <Event key={i}>
        <h2>{event.title}</h2>
        <h2 style={{ color: 'rgb(50,110,250)' }}>{event.lineup}</h2>
        <h2>{event.time.replace(' / ', '')}</h2>
      </Event>
    ))}
  </>
);

const Event = styled.div`
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.3334);
  border-radius: 0.125rem;
  display: block;
  margin: 1rem 0;

  @media screen and (min-width: 30rem) {
    margin: 1rem 20rem 1rem 0;
    padding: 1rem 2rem;
    display: inline-block;
  }

  h2 {
    font-size: 1rem;
  }
`;
