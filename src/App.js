import "./App.css";
import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";
import { useState } from "react";

const DUMMIE_GOALS = [
  { text: "Do all exercises!", id: "g1" },
  { text: "Finish the course!", id: "g2" },
];

function App() {
  const [courseGoals, setCourseGoals] = useState(DUMMIE_GOALS);

  const addGoalHandler = (newGoal) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: newGoal, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteGoalHander = (goalId) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteGoalHander} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">{content}</section>
    </div>
  );
}

export default App;