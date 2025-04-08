import React, { useRef } from 'react';
import { useTimeline } from '../../context/TimelineContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import getIconByName from '../../utils/getIconByName';
import './index.css';

export default function Forecast() {
  const { timeline } = useTimeline();
  const scrollContainerRef = useRef(null);
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };
  
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };
  
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <div className="forecast-container">
      <h2 className="forecast-title">7-Day Forecast</h2>
      <div className="forecast-scroll-container" ref={scrollContainerRef}>
        <div className="forecast-cards">
          {timeline?.days.slice(0, 7).map((day, index) => (
            <div key={day.datetime} className="forecast-card">
              <div className="forecast-date">
                {index === 0 ? 'Today' : formatDate(day.datetime)}
              </div>
              <div className="forecast-icon">
                <FontAwesomeIcon 
                  icon={getIconByName(day.icon)} 
                  className="weather-icon" 
                />
              </div>
              <div className="forecast-conditions">{day.conditions}</div>
              <div className="forecast-temp-container">
                <span className="forecast-high">{day.tempmax}&#176;</span>
                <span className="forecast-low">{day.tempmin}&#176;</span>
              </div>
              <div className="forecast-details">
                <div className="forecast-detail">
                  <span className="detail-label">Humidity:</span>
                  <span className="detail-value">{day.humidity}%</span>
                </div>
                <div className="forecast-detail">
                  <span className="detail-label">Wind:</span>
                  <span className="detail-value">{day.windspeed}</span>
                </div>
                <div className="forecast-detail">
                  <span className="detail-label">Precip:</span>
                  <span className="detail-value">{day.precipprob}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="forecast-nav-buttons">
        <button className="forecast-nav-button prev-button" onClick={scrollLeft} aria-label="Previous">
          ←
        </button>
        <button className="forecast-nav-button next-button" onClick={scrollRight} aria-label="Next">
          →
        </button>
      </div>
    </div>
  );
}