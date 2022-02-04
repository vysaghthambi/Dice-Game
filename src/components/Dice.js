import Die from "./Die";

const Dice = ({ diceArr }) => {
  const dieElement = diceArr.map((value) => <Die value={value} />);

  return <div className="row row-cols-5 my-5 mx-2">{dieElement}</div>;
};

export default Dice;
