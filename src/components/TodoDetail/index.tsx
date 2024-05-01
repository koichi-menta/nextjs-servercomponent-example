import { Todo } from "@/types/api";
import { microCmsFetcher } from "@/utiles/fetcher";
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
  const todo = await microCmsFetcher<Todo>("/todos", props.id);

  return <Component {...props} todo={todo} />;
};

export default Container;
