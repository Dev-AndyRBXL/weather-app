import React, { useEffect, useState } from 'react';
import { TimelineProvider } from './context/TimelineContext';
import ReactLogo from './assets/react.svg';
import initialQuery from './data/initialQuery';
import Form from './components/Form';
import GeneralContainer from './components/GeneralContainer';
import ForecastContainer from './components/ForecastContainer';
import './App.css';

function App() {
  const [query, setQuery] = useState(null);

  useEffect(() => {
    initialQuery().then(setQuery);
  }, []);

  if (!query) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <TimelineProvider initialQuery={query}>
      <main>
        <section className="form-sect">
          <Form />
        </section>
        <section className="general-sect">
          <GeneralContainer />
        </section>
        <section className="forecast-sect">
          <ForecastContainer />
        </section>
      </main>
      <footer>
        <div className="footer__wrapper">
          <img src={ReactLogo} alt="React Logo" />
          <h5>&#169; Copyright 2025 Dev_Andy | Weather App</h5>
        </div>
      </footer>
    </TimelineProvider>
  );
}

export default App;
