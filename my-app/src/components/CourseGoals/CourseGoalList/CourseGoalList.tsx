import React from "react";
import { CourseGoalItem } from "../CourseGoalItem/CourseGoalItem";
import "./CourseGoalList.css";

interface Goal {
  id: string;
  text: string;
}

interface CourseGoalListProps {
  items: Goal[];
  onDeleteItem: (id?: string) => void;
}

export const CourseGoalList = ({
  items,
  onDeleteItem,
}: CourseGoalListProps) => {
  return (
    <ul className="goal-list">
      {items.map((goal: Goal) => (
        <CourseGoalItem key={goal.id} id={goal.id} onDelete={onDeleteItem}>
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};
