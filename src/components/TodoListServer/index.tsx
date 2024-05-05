import { Todo } from "@/types/api";
import { MicroCmsType } from "@/types/utiles";
import { microCmsFetcher } from "@/utiles/fetcher";
import { sleep } from "@/utiles/sleep";
import TodoListClient from "@/components/TodoListClient";

type ContainerProps = {};
type Props = {
  todo: Todo[];
} & ContainerProps;

const Component = ({ todo }: Props) => (
  <div className="border p-4">
    <TodoListClient todo={todo} />
  </div>
);

const Container = async (props: ContainerProps) => {
  await sleep(500);
  const { contents } = await microCmsFetcher<MicroCmsType<Todo>>("/todos");

  return <Component {...props} todo={contents.slice(0, 10)} />;
};

export default Container;
