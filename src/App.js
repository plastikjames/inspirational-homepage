import React, { useState, useEffect } from 'react';
import Weather from './features/weather/weather';
import GoalsInput from './features/goals/goalsInput';
import GoalsList from './features/goals/goalsList';
import Quote from './features/quote/quote';
import {SlArrowLeft, SlArrowRight} from 'react-icons/sl';
import { BsDash } from 'react-icons/bs';

import './App.css';

let img = "starwars"; // sets the mood of the images

let Access_Key = "FPfd2YuKlYWYzYlm4x7zhJOnoL8Ws8pnw4d4lasBZPQ";

function App() {

  const [ images, setImages ] = useState([{urls: {regular: ""}}]);
  const [ selectedImage, setSelectedImage ] = useState(0);

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
        <div id="buttoncontainer">
          <button value="left" onClick={() => selectedImage !== 0 ? setSelectedImage(selectedImage -1) : setSelectedImage(0)}><SlArrowLeft/></button>
          <button value={0} onClick={() => setSelectedImage(0)}><BsDash/></button>
          <button value={1} onClick={() => setSelectedImage(1)}><BsDash/></button>
          <button value={2} onClick={() => setSelectedImage(2)}><BsDash/></button>
          <button value={3} onClick={() => setSelectedImage(3)}><BsDash/></button>
          <button value={4} onClick={() => setSelectedImage(4)}><BsDash/></button>
          <button value={5} onClick={() => setSelectedImage(5)}><BsDash/></button>
          <button value={6} onClick={() => setSelectedImage(6)}><BsDash/></button>
          <button value={7} onClick={() => setSelectedImage(7)}><BsDash/></button>
          <button value={8} onClick={() => setSelectedImage(8)}><BsDash/></button>
          <button value={9} onClick={() => setSelectedImage(9)}><BsDash/></button>
          <button value="right" onClick={() => selectedImage !== 9 ? setSelectedImage(selectedImage +1) : setSelectedImage(9)}><SlArrowRight/></button>
        </div>
      </div>
    </div>
  );
}

export default App;
