export function initFBSDK() {
  if ((window as any).FB === undefined) {
    console.log('FB undefined -> provide callback');
    (window as any).fbAsyncInit = function() {
      initialize();
    };
  } else {
    console.log('FB defined -> call init right away');
    initialize();
  }

  function initialize() {
    (window as any).FB.init({
      appId: '2078600758914129',
      cookie: true,
      xfbml: true,
      version: 'v3.2',
    });
  }
}

export function getEvents(setEvents) {
  getClubEvents(FB, setEvents, 'BossaNovaCivicClub');
  getClubEvents(FB, setEvents, 'moodringnyc');
  getClubEvents(FB, setEvents, 'nowadaysnyc');
  getClubEvents(FB, setEvents, 'elsewherespace');
}

export function getClubEvents(FB: any, setEvents: any, club: string) {
  FB.api(`/${club}/events`, 'GET', settings, (response: any) => {
    const newEvents = parseEvents(response, club);
    setEvents(events => ({
      ...events,
      [club]: newEvents,
    }));
  });
}

function parseEvents(response: any, venue: any) {
  const events = response.data
    .sort(
      (a: any, b: any) =>
        (new Date(a.start_time) as any) -
        (new Date(b.start_time) as any),
    )
    .map((event: any) => ({
      ...event,
      times: {
        start: new Date(Date.parse(event.start_time)),
        end: new Date(Date.parse(event.end_time)),
      },
    }));

  console.log(`~*~*~ ${venue} ~*~*~`);
  console.log('events: ', events);
  return events;
  // console.log('paging: ', response.paging);
}

const settings = {
  fields: 'name,start_time,end_time,event_times,id',
  limit: '50',
  time_filter: 'upcoming',
};