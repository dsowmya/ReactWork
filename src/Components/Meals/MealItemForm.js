import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";

const MealItemForm = (props) => {
  const inputDetails = {
    id: props.id,
    type: Number,
    min: 1,
    max: 5,
    step: 1,
    defaultValue: 1,
  };

  return (
    <div className={classes.form}>
      <Input input={inputDetails} label="Amount"></Input>
      <button> Add To Cart </button>
    </div>
  );
};

export default MealItemForm;
