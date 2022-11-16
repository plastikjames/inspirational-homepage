import React from 'react';
import Weather from './features/weather/weather';
import GoalsInput from './features/goals/goalsInput';
import GoalsList from './features/goals/goalsList';
import Quote from './features/quote/quote';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>This will be my first app.</h1>
      <Weather />
      <GoalsInput />
      <GoalsList />
      <Quote />
    </div>
  );
}

export default App;
