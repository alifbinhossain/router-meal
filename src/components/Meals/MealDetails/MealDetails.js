import React, { useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./MealDetails.css";

const MealDetails = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState({});
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals[0]))
      .catch((err) => console.log(err));
  }, []);
  const {
    strMeal,
    strMealThumb,
    strYoutube,
    strInstructions,
    strArea,
    strCategory,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
  } = meal;
  return meal.strMeal ? (
    <article className="my-card-details">
      <img src={strMealThumb} alt="" />
      <div className="card-info p-4">
        <Card.Body className="m-0 mb-4 p-0">
          <Card.Title className="card-details-title">{strMeal}</Card.Title>
          <Card.Text className="card-details-text">
            {strInstructions.slice(0, 500)}..
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <li className="list-item">Category : {strCategory}</li>
          <li className="list-item">Area : {strArea}</li>
          <li className="list-item">
            Ingredients : {strIngredient1}, {strIngredient2}, {strIngredient3},
            {strIngredient4}, {strIngredient5}, {strIngredient6},
            {strIngredient7}..
          </li>
        </ListGroup>
        <Card.Body className="m-0 p-0 mt-4">
          <Link className="me-4" to="/meals">
            See All
          </Link>
          <Card.Link href={strYoutube} target="_blank">
            Watch on YouTube
          </Card.Link>
        </Card.Body>
      </div>
    </article>
  ) : null;
};

export default MealDetails;
