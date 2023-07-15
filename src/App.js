import React, { useState } from "react";
import "./styles.css";

const foodDb = {
  Indian: [
    { name: "Rajma Chawal", rating: "5/5" },
    { name: "Aloo Tikki", rating: "4/5" },
    { name: "Masala Dosa", rating: "5/5" }
  ],
  Italian: [
    { name: "Bruschetta", rating: "4/5" },
    { name: "Focaccia", rating: "5/5" }
  ],
  Chinese: [
    { name: "Kung Pao Chicken", rating: "5/5" },
    { name: "Dim Sum", rating: "4/5" }
  ],
  Japanese: [
    { name: "Sushi", rating: "5/5" },
    { name: "Onigiri", rating: "5/5" }
  ]
};

export default function App() {
  const [cuisine, setCuisine] = useState("Indian");
  function cuisineClickHandler(cuisine) {
    setCuisine(cuisine);
    console.log(foodDb[cuisine]);
  }
  return (
    <div className="App">
      <p className="heading">🥑 goodfood</p>
      <p>
        Here are some dishes I've tried and rated. Click on any cuisine to see
        if you should try them too!
      </p>
      {Object.keys(foodDb).map((cuisine) => (
        <button onClick={() => cuisineClickHandler(cuisine)}>{cuisine}</button>
      ))}
      <hr />
      <div>
        <ul>
          {foodDb[cuisine].map((food) => (
            <li>
              <div className="foodName">{food.name}</div>
              <div>{food.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
