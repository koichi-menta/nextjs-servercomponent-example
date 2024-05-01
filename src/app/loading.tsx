type ContainerProps = {};
type Props = {} & ContainerProps;

const Component = ({}: Props) => (
  <div>
    <p>⏳loading...⏳</p>
  </div>
);

const Container = (props: ContainerProps) => {
  return <Component {...props} />;
};

export default Container;
