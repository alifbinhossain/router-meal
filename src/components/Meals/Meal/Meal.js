import React from "react";
import "./Meal.css";
import { Card, Col, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const Meal = (props) => {
  const {
    strMeal,
    strMealThumb,
    strInstructions,
    strCategory,
    strArea,
    idMeal,
  } = props.meal;
  const history = useHistory();

  const url = `meals/meal/${idMeal}`;

  const handleClick = () => {
    history.push(url);
  };
  return (
    <Col>
      <div className="p-3 my-card">
        <div className="card-top d-flex">
          <Card.Img
            variant="top"
            src={strMealThumb}
            className="card-img me-4 w-50"
          />
          <div className="card-info mt-5">
            <Card.Title className="card-title">
              {strMeal.slice(0, 20)}
            </Card.Title>
            <h4 className="food-category">Category : {strCategory}</h4>
            <h4 className="food-area">Area : {strArea}</h4>
          </div>
        </div>
        <Card.Body className="px-0">
          <Card.Text className="card-text">
            {strInstructions.slice(0, 200)}..
          </Card.Text>
        </Card.Body>
        <Button
          className="me-4"
          onClick={handleClick}
          variant="primary w-50 mx-auto"
        >
          Get Details
        </Button>
      </div>
    </Col>
  );
};

export default Meal;
