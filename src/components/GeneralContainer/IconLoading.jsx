import React from 'react';

export default function IconLoading() {
  return (
    <div className="weather-loading">
      <div className="weather-loading__wrapper">
        <div className="weather-loading__spinner">
          <div className="spinner"></div>
        </div>
      </div>
    </div>
  );
}
