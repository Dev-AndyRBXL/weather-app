import React from 'react';
import {
  faCloudRain,
  faWater,
  faSun,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';
import to12HourClock from '../../../utils/to12HourClock';
import Icon from './Icon';
import TempHeading from './TempHeading';
import TempMinmax from './TempMinmax';

export default function WeatherConditionsInfo({
  FontAwesomeIcon,
  timeline,
  getIconByName,
}) {
  if (!timeline) return null;

  const { currentConditions, description, days } = timeline;
  const currentDay = days[0];
  const showFeelsLike = currentConditions.feelslike !== currentConditions.temp;

  const formattedWeekday = new Date(currentDay.datetime).toLocaleDateString(
    'en-US',
    {
      weekday: 'long',
    }
  );

  const formattedDate = new Date(currentDay.datetime).toLocaleDateString(
    'en-US',
    {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
    }
  );

  const weatherMetrics = [
    {
      id: 'precipitation',
      icon: faCloudRain,
      label: 'Chance of rain',
      value: `${currentDay.precipprob}%`,
    },
    {
      id: 'humidity',
      icon: faWater,
      label: 'Humidity',
      value: `${currentDay.humidity}%`,
    },
    {
      id: 'sunrise',
      icon: faSun,
      label: 'Sunrise',
      value: to12HourClock(currentDay.sunrise),
    },
    {
      id: 'sunset',
      icon: faMoon,
      label: 'Sunset',
      value: to12HourClock(currentDay.sunset),
    },
  ];

  return (
    <div className="general-sect__wrapper">
      <div className="weather-conditions__info">
        <div className="weather-conditions-main__info-wrapper">
          <div className="weather-conditions-main__info">
            <div>
              <div className="weather-conditions-icon-container">
                <Icon
                  FontAwesomeIcon={FontAwesomeIcon}
                  timeline={timeline}
                  getIconByName={getIconByName}
                />
              </div>
              <div className="weather-conditions-temp-container">
                <TempHeading timeline={timeline} />
                {showFeelsLike && (
                  <p className="temp-value--feelslike">
                    Feels like {currentConditions.feelslike}°
                  </p>
                )}
              </div>
            </div>
            <div className="weather-conditions-desc">
              <p>{description}</p>
            </div>
            <div className="weather-conditions-datetime">
              <p>
                <span>{formattedWeekday},</span>
                &nbsp;{formattedDate}
              </p>
            </div>
          </div>
          <div className="weather-conditions-temp-container--minmax">
            <TempMinmax timeline={timeline} />
          </div>
        </div>
        <hr />
        <div className="weather-conditions-additional__info">
          <div className="weather-conditions-additional__info-wrapper">
            {weatherMetrics.map((metric) => (
              <div
                key={metric.id}
                className={`weather-conditions-${metric.id}`}
              >
                <div className={`weather-conditions-${metric.id}__wrapper`}>
                <FontAwesomeIcon icon={metric.icon} />
                <p>
                  {metric.label}
                  <span>{metric.value}</span>
                </p>
              </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
