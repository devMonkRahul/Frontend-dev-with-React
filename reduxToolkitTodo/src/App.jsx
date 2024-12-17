import AddTodo from "./components/AddTodo";
import React, { useState } from "react";
import Todos from "./components/Todos";

function App() {

  const [currentInput, setCurrentInput] = useState({id: "", title: ""});

  return (
    <>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <AddTodo currentInput={currentInput} setCurrentInput={setCurrentInput}/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            <Todos setCurrentInput={setCurrentInput}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
