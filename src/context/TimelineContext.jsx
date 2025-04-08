import React, { createContext, useContext, useState, useEffect } from 'react';
import fetchNewTimeline from '../utils/fetchNewTimeline';

const TimelineContext = createContext();

export const useTimeline = () => {
  return useContext(TimelineContext);
};

export const TimelineProvider = ({ initialQuery, children }) => {
  const [query, setQuery] = useState(initialQuery);
  const [timeline, setTimeline] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchNewTimeline(query);
        setTimeline(data); 
      } catch (error) {
        setError('Error fetching timeline');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return (
    <TimelineContext.Provider
      value={{ timeline, setQuery, loading, error }}
    >
      {children}
    </TimelineContext.Provider>
  );
};
