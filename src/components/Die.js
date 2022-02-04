const Die = ({ value, handleClick }) => {
    const styles = {
        background: value.isHeld ? "green" : "transparent"
    }

  return (
    <div className="col m-1 die" style={styles} onClick={() => handleClick(value.id)}>
      <h1 className="text-center mb-0">{value.digit}</h1>
    </div>
  );
};

export default Die;
