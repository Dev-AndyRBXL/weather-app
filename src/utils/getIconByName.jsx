import {
  faCloud,
  faCloudRain,
  faCloudSun,
  faCloudMoon,
  faSnowflake,
  faWind,
  faSun,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';

export default function getIconByName(icon) {
  switch (icon) {
    case 'snow':
      return faSnowflake;
    case 'rain':
      return faCloudRain;
    case 'fog':
      return faCloud;
    case 'wind':
      return faWind;
    case 'cloudy':
      return faCloud;
    case 'partly-cloudy-day':
      return faCloudSun;
    case 'partly-cloudy-night':
      return faCloudMoon;
    case 'clear-day':
      return faSun;
    case 'clear-night':
      return faMoon;
    default:
      return null;
  }
}
