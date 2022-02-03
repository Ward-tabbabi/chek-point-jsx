import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black" }}>
        <h1 className="red title">your name hear</h1>

        <img src="gomycode.png" alt="jhjhj" />
        <h1>
          heellooo <span style={{ color: "red" }}>hello</span>
        </h1>
        <img src="/marcides.png.jpg" alt="" />
      </div>
      <video style={{ width: "320", height: "240" }} controls={true}>
        <source src="coco.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
