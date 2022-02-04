import Dice from "./components/Dice";

function App() {
  return (
    <div className="main mt-5 d-flex flex-column justify-content-center">
      <h2 className="text-center pt-3">Dice Game</h2>
      <div>
        <Dice />
      </div>
      <button className="btn btn-primary align-self-center">Roll</button>
    </div>
  );
}

export default App;
