import { baseURL } from "@/utiles/constants";
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
  const res = await fetch(baseURL, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("エラーです");
  }
  const todo = await res.json();

  return <Component {...props} todo={todo.slice(0, 10)} />;
};

export default Container;
