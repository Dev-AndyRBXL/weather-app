export default function to12HourClock(time) {
  const [hourStr, minute] = time.split(':');
  let hour = parseInt(hourStr, 10);
  const period = hour >= 12 ? 'PM' : 'AM';

  hour = hour % 12 || 12;
  return `${hour}:${minute} ${period}`;
}
