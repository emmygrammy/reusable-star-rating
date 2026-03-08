import logo from './logo.svg';
import './App.css';

import { useState } from "react";
import StarRating from "./components/StarRating";


const RatingMessage = ({ rating }) => {
  const messages = [
    "Terrible",
    "Bad",
    "Average",
    "Good",
    "Excellent",
  ];
  return <p>{messages[rating - 1]}</p>;
};

function App() {
  const [rating, setRating] = useState(3);
  return (
    <div className="App">
      <div style={{ margin: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h2>Star Rating</h2>
      <StarRating 
        totalStars={5}
        rating={rating}
        onRate={setRating}
        color="orange"
        size={40}
         />
         <p>Selected Rating: {rating}</p>
         <RatingMessage rating={rating} />
         </div>
    </div>
  );
}

export default App;
