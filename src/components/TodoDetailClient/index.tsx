"use client";
import { useStore } from "@/store/store";

type ContainerProps = {};
type Props = {
  todo: any;
} & ContainerProps;

const Component = ({ todo }: Props) => (
  <div className="border p-4">
    <p>タイトル：{todo.title}</p>
    <p>状態：{todo.completed ? "完了" : "未完了"}</p>
  </div>
);

const Container = (props: ContainerProps) => {
  const todo = useStore((state) => state.todoForm);

  return <Component {...props} todo={todo} />;
};

export default Container;
