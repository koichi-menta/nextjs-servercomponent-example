import Link from "next/link";

type ContainerProps = {};
type Props = {} & ContainerProps;

const Component = ({}: Props) => (
  <div className="w-full bg-gray-200 p-2">
    <Link href={"/"}>ホーム</Link>
  </div>
);

const Container = (props: ContainerProps) => {
  return <Component {...props} />;
};

export default Container;
