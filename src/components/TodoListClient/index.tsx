"use client";

import { useStore } from "@/store/store";
import { Todo } from "@/types/api";
import { useEffect } from "react";

type ContainerProps = {
  todo: Todo[];
};
type Props = {
  handleTodoSelect: (id: Todo) => void;
} & ContainerProps;

const Component = ({ todo, handleTodoSelect }: Props) => (
  <div className="border p-4">
    {todo.map((item: Todo) => (
      <p
        key={item.id}
        className="border-t p-1 first:border-none"
        onClick={() => handleTodoSelect(item)}
      >
        {item.title}
      </p>
    ))}
  </div>
);

const Container = (props: ContainerProps) => {
  const setTodoForm = useStore((state) => state.setTodoForm);
  const { todo } = props;

  const handleTodoSelect = (id: Todo) => {
    setTodoForm(id);
  };

  useEffect(() => {
    setTodoForm(todo[0]);
  }, [setTodoForm, todo]);

  return (
    <Component {...props} todo={todo} handleTodoSelect={handleTodoSelect} />
  );
};

export default Container;
