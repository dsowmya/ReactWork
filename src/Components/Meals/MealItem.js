import classes from "./MealItem.module.css";
import { Fragment } from "react";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  return (
    <Fragment>
      <li className={classes.meal} key={props.meal.id}>
        <div>
          <h3>{props.meal.name} </h3>
          <span className={classes.description}>{props.meal.description}</span>
          <div className={classes.price}>{`$${props.meal.price.toFixed(
            2
          )}`}</div>
        </div>
        <div>
          <MealItemForm />
        </div>
      </li>
    </Fragment>
  );
};

export default MealItem;
