import React from "react";
import classes from "./Header.module.css";
import mealsImg from "../../Assets/meals.jpeg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
      </header>
      <img
        src={mealsImg}
        className={classes["main-image"]}
        alt="A table full of food."
      ></img>
    </React.Fragment>
  );
};

export default Header;
