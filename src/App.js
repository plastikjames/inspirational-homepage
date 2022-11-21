import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Weather from './features/weather/weather';
import GoalsInput from './features/goals/goalsInput';
import GoalsList from './features/goals/goalsList';
import Quote from './features/quote/quote';
import BackgroundButtons from './features/background/backgroundButtons';
import { selectImg, selectImages, isLoadingImages, loadBackgroundImages } from './features/background/backgroundSlice';
import './App.css';

let img = "starwars"; // sets the mood of the images

function App() {
  const selectedImage = useSelector(selectImg);
  const images = useSelector(selectImages);
  const imagesAreLoading = useSelector(isLoadingImages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBackgroundImages(img));
  }, []);

  if (imagesAreLoading || !images[1]) return <div>Loading Images</div>

  return (
    <div className="App">
      <div className="container" style={{
        backgroundImage: `url(${images[selectedImage].urls.regular})`
        }}
        >
        <h1 id="title">What's on your mind?</h1>
        <div>
          <Weather />
          <GoalsInput />
          <GoalsList />
          <Quote />
        </div>
        <BackgroundButtons />
      </div>
    </div>
  );
}

export default App;
