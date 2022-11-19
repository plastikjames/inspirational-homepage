import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectImages } from './features/background/backgroundSlice';
import Weather from './features/weather/weather';
import GoalsInput from './features/goals/goalsInput';
import GoalsList from './features/goals/goalsList';
import Quote from './features/quote/quote';
import BackgroundButtons from './features/background/backgroundButtons';
import { selectImg } from './features/background/backgroundSlice';
import './App.css';

let img = "starwars"; // sets the mood of the images

let Access_Key = "FPfd2YuKlYWYzYlm4x7zhJOnoL8Ws8pnw4d4lasBZPQ";

function App() {
  const selectedImage = useSelector(selectImg);
  const [ images, setImages ] = useState([{urls: {regular: ""}}]);

  const getBackground = async () => {
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${img}&orientation=landscape&client_id=${Access_Key}&per_page=10`
    );
    const dataJ = await data.json();
    const result = dataJ.results;
    setImages(result);
  }

  useEffect(() => {
    getBackground();
  }, []);

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
