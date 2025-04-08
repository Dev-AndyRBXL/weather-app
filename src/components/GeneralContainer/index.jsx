import React from 'react';
import { useTimeline } from '../../context/TimelineContext';
import WeatherConditions from './WeatherConditions';
import './index.css';

export default function General() {
  const { timeline } = useTimeline();

  return (
    <div className="general-container">
      <WeatherConditions timeline={timeline} />
    </div>
  );
}
