import React from "react";
import "./NotFound.css";
import errorImage from "../../images/undraw_page_not_found_su7k.svg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound-container d-flex align-items-center justify-content-center">
      <div className="content w-50 d-flex flex-column align-items-center justify-content-center">
        <img className="w-100 mb-4" src={errorImage} alt="" />
        <h4 className="max-content">Page is not found..</h4>
        <Link to="/home">Back to home</Link>
      </div>
    </div>
  );
};

export default NotFound;
