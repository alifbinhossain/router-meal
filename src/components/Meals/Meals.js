import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Form, Row } from "react-bootstrap";
import NotFound from "../NotFound/NotFound";
import Meal from "./Meal/Meal";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [searchText, setSearchText] = useState("fish");

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals))
      .catch((err) => console.log(err));
  }, [searchText]);

  const handleSearch = (e) => {
    const searchTextValue = e.target.value;
    setSearchText(searchTextValue);
  };
  return meals !== null ? (
    <Container className="pb-5">
      <Form.Control
        className="w-50 my-3 mx-auto"
        type="text"
        placeholder="Serach Food here"
        onChange={handleSearch}
      />
      <h5 className="text-center text-white mb-3">Result : {searchText}</h5>
      <Row xs={1} md={3} className="g-4">
        {meals.map((meal) => (
          <Meal key={meal.idMeal} meal={meal}></Meal>
        ))}
      </Row>
    </Container>
  ) : (
    <NotFound></NotFound>
  );
};

export default Meals;
