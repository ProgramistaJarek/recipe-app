import React, { useState, useEffect } from "react";
import { BiTime } from "react-icons/bi";
import { GiMeal } from "react-icons/gi";
import "animate.css";

function Recipe(props) {
  return (
    <div className="recipe animate__animated animate__bounceIn animate__delay-1s">
      <div className="flipper">
        <div className="front-card">
          <div className="info">
            <img className="img" width={props.imgWidth} height={props.imgHeight} src={props.img} alt={props.title} />
            <div className="meal">
              <h1 className="title">{props.title}</h1>
              <div className="details">
                <p className="calories">{Math.round(props.calories)} kcal</p>
                <p className="time">
                  <BiTime className="mr-1" />
                  {props.time === 0 ? "?" : props.time}
                </p>
                <p className="type">
                  <GiMeal className="mr-1" />
                  {props.type}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="back-card">
          <Ingredients ingred={props.ingred} />
        </div>
      </div>
    </div>
  );
}

const Ingredients = (props) => {
  return (
    <ol className="ingredients">
      {props.ingred.map((ingredient, index) => (
        <li key={index}>{ingredient.text}</li>
      ))}
    </ol>
  );
};

export default Recipe;
