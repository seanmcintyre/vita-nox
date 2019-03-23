import React from 'react';
import styled from 'styled-components';

export const Weekend = ({ data }) => (
  <>
    <h1>This Weekend</h1>
    <WeekendWrapper>
      {[5, 6, 7]
        .filter(day => nextDate(day) >= new Date().getDate())
        .map(day => (
          <WeekendNight>
            <h1>
              {dayName[day]} {nextDate(day)}
            </h1>
            <div>
              {Object.keys(data).map(
                venue =>
                  data[venue].events.length > 0 &&
                  (data[venue].events &&
                    data[venue].events
                      .filter(event =>
                        event.time.includes(nextDate(day)),
                      )
                      .map(event => (
                        <>
                          <h3 style={{ color: 'rgb(220,50,70)' }}>
                            {venue}
                          </h3>
                          <h4>{event.title}</h4>
                          <div style={{ color: 'rgb(50,110,250)' }}>
                            {event.lineup}
                          </div>
                          <br />
                        </>
                      ))),
              )}
            </div>
          </WeekendNight>
        ))}
    </WeekendWrapper>
  </>
);

const nextDate = dayNum =>
  new Date().getDay() < 6
    ? new Date().getDate() +
      ((dayNum - 1 - new Date().getDay() + 7) % 7) +
      1
    : new Date().getDate() +
      ((dayNum - 1 - new Date().getDay()) % 7) +
      1;

const WeekendWrapper = styled.div`
  /* display: flex; */
  width: 100%;
`;

const WeekendNight = styled.div`
  /* flex-grow: 1; */
  border: 1px solid rgba(255, 255, 255, 0.3334);
  margin: 1rem 0;
  border-radius: 0.125rem;
  padding: 1rem;
  min-height: 30rem;
`;

const dayName = {
  5: 'Friday',
  6: 'Saturday',
  7: 'Sunday',
};
