import React from 'react';

export default function Icon({ FontAwesomeIcon, timeline, getIconByName }) {
  return (
    <>
      {timeline && (
        <FontAwesomeIcon
          icon={getIconByName(timeline?.currentConditions.icon)}
        />
      )}
    </>
  );
}
