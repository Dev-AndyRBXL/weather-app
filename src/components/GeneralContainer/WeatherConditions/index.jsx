import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import getIconByName from '../../../utils/getIconByName';
import WeatherConditionsInfo from './WeatherConditionsInfo';

export default function WeatherConditions({ timeline, isLoading }) {
  const showLoading = isLoading || !timeline;

  return (
    <div className="weather-conditions">
      <div className="weather-conditions__wrapper">
        {showLoading ? (
          <div className="weather-loading">
            <div className="weather-loading__content">
              <div className="weather-loading__spinner"></div>
              <h3 className="weather-loading__text">Loading weather data...</h3>
            </div>
          </div>
        ) : (
          <WeatherConditionsInfo
            FontAwesomeIcon={FontAwesomeIcon}
            timeline={timeline}
            getIconByName={getIconByName}
          />
        )}
      </div>
    </div>
  );
}
