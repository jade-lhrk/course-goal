import React from "react";
import "./CourseGoalItem.css";

interface CourseGoalItemProps extends React.HTMLAttributes<HTMLElement>{
  onDelete: (id?: string) => void;
}

export const CourseGoalItem = (props: CourseGoalItemProps) => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};
