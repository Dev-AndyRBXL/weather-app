import React from 'react';

export default function TempHeading({ timeline }) {
  return (
    <>
      {timeline && (
        <h2 className="temp-value__heading">
          {timeline.currentConditions.temp}&#176;
        </h2>
      )}
    </>
  );
}
