import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getClubEvents } from '../facebook';
import { Venues } from './Venues';

const clubs = [
  'BossaNovaCivicClub',
  'moodringnyc',
  'nowadaysnyc',
  'elsewherespace',
];

export const App = () => {
  const [events, setEvents] = useState({});

  useEffect(() => {
    clubs.forEach(club => getClubEvents(FB, setEvents, club));
  }, []);

  return (
    <>
      <Background src="https://media0.giphy.com/media/xT9IgjHkJczyL3Ujle/giphy.gif" />
      <Events events={events} />
    </>
  );
};

const Events = ({ events }) =>
  events ? (
    <EventsWrapper>
      <Weekend>
        <WeekendNight>
          <h1>Friday {nextDate(5)}</h1>
        </WeekendNight>
        <WeekendNight>
          <h1>Saturday {nextDate(6)}</h1>
        </WeekendNight>
        <WeekendNight>
          <h1>Sunday {nextDate(7)}</h1>
        </WeekendNight>
      </Weekend>
      <br />
      <hr />
      <br />
      <Venues events={events} />
    </EventsWrapper>
  ) : (
    <>loading...</>
  );

const nextDate = dayNum =>
  new Date().getDate() +
  ((dayNum - 1 - new Date().getDay() + 7) % 7) +
  1;

const Weekend = styled.div`
  display: flex;
  width: 100%;
`;

const WeekendNight = styled.div`
  flex-grow: 1;
  border: 2px solid rgba(255, 255, 255, 0.8);
  margin: 1rem;
  border-radius: 0.25rem;
  padding: 1rem;
  min-height: 30rem;
`;

const Background = styled.img`
  width: calc(100% - 10rem);
  height: calc(100vh - 10rem);
  position: absolute;
  top: 5rem;
  left: 5rem;
  border-radius: 0.5rem;
  z-index: -1;
  opacity: 0.2;
`;

const EventsWrapper = styled.div`
  padding: 2rem 4rem;
  height: 100vw;
  overflow-y: scroll;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;
