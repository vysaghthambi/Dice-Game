import Die from "./Die";

const Dice = ({ diceArr, handleClick }) => {
  const dieElement = diceArr.map((value) => (
    <Die key={value.id} value={value} handleClick={handleClick} />
  ));

  return <div className="row row-cols-6 my-5 ms-4">{dieElement}</div>;
};

export default Dice;
