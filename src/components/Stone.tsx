export const Stone = (props: {
  count: number;

  onClick: (count: number) => void;
}) => {
  const clickStone = () => {
    props.onClick(props.count + 1);
  };
  return (
    <>
      <span>{props.count}</span>
      <button onClick={clickStone}>CLICK!</button>
    </>
  );
};
