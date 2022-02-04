import Die from "./Die";

const Dice = ({ diceArr }) => {
  const dieElement = diceArr.map((value) => <Die value={value} />);

  return <div className="row row-cols-6 my-5 ms-4">{dieElement}
  </div>;
};

export default Dice;
