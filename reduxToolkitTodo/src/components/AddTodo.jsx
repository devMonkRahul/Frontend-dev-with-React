import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from "../features/todo/todoSlice"

function AddTodo() {

  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')
  }

  return (
    <>
      <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
        <input 
          type='text' 
          placeholder='Enter a Todo'
          className="w-[80%] border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button 
          type='submit'
          className="rounded-r-lg px-3 py-1.5 bg-green-600 text-white shrink-0 rounded-lg"
        >Add Todo</button>
      </form>
    </>
  )
}

export default AddTodo