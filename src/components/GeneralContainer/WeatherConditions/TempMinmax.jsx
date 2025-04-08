import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function TempMinmax({ timeline }) {
  return (
    <>
      <div className="temp-min">
        {timeline && (
          <>
            <span>
              <FontAwesomeIcon icon={faArrowDown} />
            </span>
            <p className="temp-min__p">
              Min <span>{timeline?.days[0].tempmin}&#176;</span>
            </p>
          </>
        )}
      </div>
      <div className="temp-max">
        {timeline && (
          <>
            <span>
              <FontAwesomeIcon icon={faArrowUp} />
            </span>
            <p className="temp-max__p">
              Max <span>{timeline?.days[0].tempmax}&#176;</span>
            </p>
          </>
        )}
      </div>
    </>
  );
}
