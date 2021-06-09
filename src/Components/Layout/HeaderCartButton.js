import { Fragment } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  return (
    <Fragment>
      <span className={classes.button} onClick={props.onClick}>
        <div className={classes.icon}>
          <CartIcon />
        </div>
        Your Cart
        <span className={classes.badge}>3</span>
      </span>
    </Fragment>
  );
};

export default HeaderCartButton;
