type Props = {
  name?: string;
};

const Greet = ({ name }: Props) => {
  return <div>hello {name ? name : 'guest'}</div>;
};

export default Greet;
