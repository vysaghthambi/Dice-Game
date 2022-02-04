const Die = (props) => {
  return (
    <div className="col m-1 die">
      <h1 className="text-center mb-0">{props.value.digit}</h1>
    </div>
  );
};

export default Die;
