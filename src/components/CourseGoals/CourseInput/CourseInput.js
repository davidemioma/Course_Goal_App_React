import "./CourseInput.css";
import Button from "../../UI/Button/Button";
import { useState } from "react";

function CourseInput(props) {
  const [enteredValue, setEnteredValue] = useState("");

  const goalInputChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    props.onAddGoal(enteredValue);

    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input
          value={enteredValue}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
}

export default CourseInput;
