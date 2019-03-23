import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getClubEvents } from '../components/getClubEvents';
import { Venues } from '../components/Venues';
import { Weekend } from '../components/Weekend';

export const App = () => {
  const [events, setEvents] = useState({});

  useEffect(() => {
    getClubEvents(setEvents);
  }, []);

  return (
    <>
      {/* <Background src="https://media0.giphy.com/media/xT9IgjHkJczyL3Ujle/giphy.gif" /> */}
      <Events events={events} />
    </>
  );
};

const Events = ({ events }) =>
  events ? (
    <EventsWrapper>
      <Weekend data={events} />
      <Venues data={events} />
    </EventsWrapper>
  ) : (
    <>loading...</>
  );

// const Background = styled.img`
//   width: calc(100% - 10rem);
//   height: calc(100vh - 10rem);
//   position: absolute;
//   top: 5rem;
//   left: 5rem;
//   border-radius: 0.5rem;
//   z-index: -1;
//   opacity: 0.2;
// `;

const EventsWrapper = styled.div`
  padding: 1rem;

  @media screen and (min-width: 30rem) {
    padding: 2rem 4rem;
  }
`;
