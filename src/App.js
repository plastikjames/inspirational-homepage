import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Weather from './features/weather/weather';
import GoalsInput from './features/goals/goalsInput';
import GoalsList from './features/goals/goalsList';
import Quote from './features/quote/quote';
import ControlledCarousel from './features/background/background';
import { selectImages, isLoadingImages, loadBackgroundImages } from './features/background/backgroundSlice';
import './App.css';

let img = "ireland"; // sets the mood of the images

function App() {
  const images = useSelector(selectImages);
  const imagesAreLoading = useSelector(isLoadingImages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBackgroundImages(img));
  }, [dispatch]);

  if (imagesAreLoading || !images[1]) return <div>Loading Images</div>

  return (
    <div className="App container-flex">
      <ControlledCarousel />
      <div className="title py-3">
        <h1 className="display-3 text-light">Inspirational Homepage</h1>
        <div className="col"></div>
        <Quote />
        <div className="col"></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col-10">
            <div className="row">
              <Weather />
              <GoalsInput />
              <GoalsList />
            </div>
          </div>
          <div className="col"></div>
        </div>

      </div>
    </div>
  );
}

export default App;
