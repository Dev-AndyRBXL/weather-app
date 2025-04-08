import React, { useReducer } from 'react';
import { useTimeline } from '../../context/TimelineContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faTemperatureHalf } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const initialState = {
  unit: 'F',
  searchbar: '',
};

function formReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_UNIT':
      return {
        ...state,
        unit: state.unit === 'F' ? 'C' : 'F',
      };
    case 'SET_SEARCHBAR':
      return {
        ...state,
        searchbar: action.payload,
      };
    case 'RESET_SEARCHBAR':
      return {
        ...state,
        searchbar: '',
      };
    default:
      return state;
  }
}

export default function Form() {
  const { setQuery } = useTimeline();
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setQuery((prevQuery) => ({
      ...prevQuery,
      location: state.searchbar,
      unit: state.unit,
    }));
    dispatch({ type: 'RESET_SEARCHBAR' });
  };

  return (
    <form className="header-form" onSubmit={handleSubmit}>
      <div className="temperature-toggle">
        <button
          type="button"
          id="unitBtn"
          onClick={() => dispatch({ type: 'TOGGLE_UNIT' })}
          aria-label={`Switch to degrees ${state.unit === 'F' ? 'Celsius' : 'Fahrenheit'}`}
        >
          <FontAwesomeIcon icon={faTemperatureHalf} className="unit-icon" />
          <span>{`°${state.unit}`}</span>
        </button>
      </div>
      
      <div className="search-container">
        <input
          type="text"
          value={state.searchbar}
          name="searchbar"
          id="searchbar"
          onChange={(ev) =>
            dispatch({
              type: 'SET_SEARCHBAR',
              payload: ev.target.value,
            })
          }
          placeholder="Enter location..."
          aria-label="Search location"
          required
        />
        <button 
          type="submit" 
          id="submitBtn" 
          aria-label="Search"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </form>
  );
}
