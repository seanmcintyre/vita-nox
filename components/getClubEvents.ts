export function getClubEvents(setEvents) {
  fetch(
    'https://api.apify.com/v2/actor-tasks/YDocxufNmzfg9xrr7/runs/last/dataset/items?token=YuDiJjt4YRgyzP3Exzpkjkaqe&format=json&clean=1',
  )
    .then(res => res.json())
    .then(out =>
      out.map(data => {
        setEvents(events => ({
          ...events,
          [data.club]: data,
        }));
      }),
    );
}
