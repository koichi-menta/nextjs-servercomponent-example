import { baseURL } from "@/utiles/constants";
import { sleep } from "@/utiles/sleep";

type ContainerProps = {
  id: string;
};
type Props = {
  todo: any;
} & ContainerProps;

const Component = ({ todo }: Props) => (
  <div className="border p-4">
    <p>タイトル：{todo.title}</p>
    <p>状態：{todo.completed ? "完了" : "未完了"}</p>
  </div>
);

const Container = async (props: ContainerProps) => {
  await sleep(2000);
  const res = await fetch(`${baseURL}/${props.id}`);

  if (!res.ok) {
    throw new Error("エラーです");
  }
  const todo = await res.json();

  return <Component {...props} todo={todo} />;
};

export default Container;
