import { useState } from "react";
import "./App.css";

function App() {
  const[count,setCount]=useState(0);
  function decreaseHandler() {
    setCount(count-1);
  }

  function increaseHandler() {
    setCount(count+1);
  }
  function resethandler() {
    setCount(0);
  }
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10" >
      <h1 className="text-[#0389d4] font-bold text-2xl ">Conter App</h1>
      <div className="bg-white flex justify-center items-center gap-12 py-3 rounded-sm text-[25px] text-[#344151">
        <button onClick = {decreaseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">
          -
        </button>
        <div className="font-bold gap-12 text-5xl">
          {count}
        </div>
        <button onClick={increaseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">
          +
        </button>
      </div>
      <button onClick={resethandler} className="bg-blue-500 text-white px-4 py-2 rounded-md text-lg">
        Reset
      </button>
    </div>
    );
}

export default App;
