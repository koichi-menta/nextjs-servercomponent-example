"use client";

import { Todo } from "@/types/api";
import { useState } from "react";
// import { revalidateTag } from "next/cache";

type ContainerProps = {};
type Props = {
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCreate: () => void;
} & ContainerProps;

const Component = ({ handleChangeInput, handleCreate }: Props) => (
  <div className="border p-4">
    <label htmlFor="title">
      タイトル：
      <input id="title" type="text" name="title" onChange={handleChangeInput} />
    </label>
    <label htmlFor="description">
      詳細：
      <input
        id="description"
        type="text"
        name="description"
        onChange={handleChangeInput}
      />
    </label>
    <label>
      状態：
      <input
        type="radio"
        value={"未完了"}
        name="completed"
        onChange={handleChangeInput}
      />
      <input
        type="radio"
        value={"完了"}
        name="completed"
        onChange={handleChangeInput}
      />
    </label>
    <button onClick={handleCreate}>登録</button>
  </div>
);

const Container = (props: ContainerProps) => {
  const [todoFormInput, setTodoFormInput] = useState<Todo>({} as Todo);
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "completed") {
      setTodoFormInput({
        ...todoFormInput,
        completed: e.target.value === "完了" ? true : false,
      });
      return;
    } else {
      setTodoFormInput({
        ...todoFormInput,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleCreate = () => {
    fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify(todoFormInput),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <Component
      {...props}
      handleChangeInput={handleChangeInput}
      handleCreate={handleCreate}
    />
  );
};

export default Container;
