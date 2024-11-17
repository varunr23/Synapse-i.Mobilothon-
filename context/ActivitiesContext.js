import React, { createContext, useState } from 'react';

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);
  const [currentSession, setCurrentSession] = useState(null);

  // Start the engine
  const startEngine = () => {
    const startTime = new Date();
    setCurrentSession({
      action: 'Engine Session',
      startTime,
      endTime: null,
      totalTime: null,
      distance: null,
    });
  };

  // Stop the engine
  const stopEngine = () => {
    if (!currentSession) return;

    const endTime = new Date();
    const totalTime = calculateDuration(currentSession.startTime, endTime);
    const distance = (Math.random() * 10).toFixed(2); // Simulated distance

    // Update the current session with end time, total time, and distance
    const updatedSession = {
      ...currentSession,
      endTime,
      totalTime,
      distance,
    };

    // Add the updated session to the activities log
    setActivities((prev) => [...prev, updatedSession]);
    setCurrentSession(null); // Clear the current session
  };

  // Helper function to calculate duration
  const calculateDuration = (start, end) => {
    const diff = end - start; // Difference in milliseconds
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <ActivitiesContext.Provider
      value={{
        activities,
        startEngine,
        stopEngine,
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};
