import "./App.css";
import { useReducer } from "react";

const initialState = {
  count: 0,
  old:0,
  input:""
}

const reducer = (state, action) => {

  switch(action.type){
    case "input":
      return { ...state, input: state.input+action.input}
    case "reset":
      return { ...state, count : 0, input:""};
    default:
    break;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <p>count : {state.count}</p>
        <p>input : {state.input}</p>
        <div>
          <div>
            <button onClick={() => dispatch({ type: "reset", input:"" })}>AC</button>
            <button>±</button>
            <button>%</button>
            <button>/</button>
          </div>
          <div>
            <button onClick={() => dispatch({ type: "input", input:"7" })}>7</button>
            <button onClick={() => dispatch({ type: "input", input:"8" })}>8</button>
            <button onClick={() => dispatch({ type: "input", input:"9" })}>9</button>
            <button>*</button>
          </div>
          <div>
            <button onClick={() => dispatch({ type: "input", input:"4" })}>4</button>
            <button onClick={() => dispatch({ type: "input", input:"5" })}>5</button>
            <button onClick={() => dispatch({ type: "input", input:"6" })}>6</button>
            <button>-</button>
          </div>
          <div>
            <button onClick={() => dispatch({ type: "input", input:"1" })}>1</button>
            <button onClick={() => dispatch({ type: "input", input:"2" })}>2</button>
            <button onClick={() => dispatch({ type: "input", input:"3" })}>3</button>
            <button>+</button>
          </div>
          <div>
            <button onClick={() => dispatch({ type: "input", input:"0" })}>0</button>
            <button>=</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
