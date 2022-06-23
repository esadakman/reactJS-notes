import Person from "./Person";
import Data from "./Data.js";
import "./App.css";

function App() {
  // const imgStyle = {
  //   display: "block",
  //   width: "300px",
  //   margin: "auto",
  //   borderRadius: "10px",
  // };
  return (
    <div>
      {Data.map((x) => {
        return (
          // <>
          <Person name={x.name} img={x.img} tel={x.tel} />
          // </>
        );
      })}
    </div>
  );
}

export default App;
