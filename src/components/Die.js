const Die = (props) => {
  return (
    <div className="col">
      <h1 className="text-center">{props.value.digit}</h1>
    </div>
  );
};

export default Die;
