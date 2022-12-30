import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Weather from './features/weather/weather';
import GoalsInput from './features/goals/goalsInput';
import GoalsList from './features/goals/goalsList';
import Quote from './features/quote/quote';
import ControlledCarousel from './features/background/background';
import { selectImages, isLoadingImages, loadBackgroundImages } from './features/background/backgroundSlice';
import './App.css';

let img = "tech"; // sets the mood of the images

function App() {
  const images = useSelector(selectImages);
  const imagesAreLoading = useSelector(isLoadingImages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBackgroundImages(img));
  }, [dispatch]);

  if (imagesAreLoading || !images[1]) return <div>Loading Images</div>

  return (
    <div className="App">
      <ControlledCarousel />
      <div>



        <Weather />
        <GoalsInput />
        <GoalsList />
        <Quote />
      </div>
    </div>
  );
}

export default App;
