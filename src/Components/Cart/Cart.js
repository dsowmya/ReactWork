import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  return (
    <Modal onBGClick={props.onClose}>
      <div className={classes["cart-items"]}>list items</div>

      <div className={classes.total}>
        <span>
          <h2>Total Amount</h2>
        </span>
        <span>$00.00</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
