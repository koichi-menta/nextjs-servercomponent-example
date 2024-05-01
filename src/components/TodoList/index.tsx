import { Todo } from "@/types/api";
import { MicroCmsType } from "@/types/utiles";
import { microCmsFetcher } from "@/utiles/fetcher";
import { sleep } from "@/utiles/sleep";

type ContainerProps = {};
type Props = {
  todo: any;
} & ContainerProps;

const Component = ({ todo }: Props) => (
  <div className="border p-4">
    {todo.map((item: any) => (
      <p key={item.id} className="border-t p-1 first:border-none">
        {item.title}
      </p>
    ))}
  </div>
);

const Container = async (props: ContainerProps) => {
  await sleep(500);
  const { contents } = await microCmsFetcher<MicroCmsType<Todo>>("/todos");

  return <Component {...props} todo={contents.slice(0, 10)} />;
};

export default Container;
