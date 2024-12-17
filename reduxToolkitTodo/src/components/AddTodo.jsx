import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, editTodo } from "../features/todo/todoSlice"

function AddTodo({ currentInput, setCurrentInput }) {

  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    if (currentInput) {
      setInput(currentInput.title)
    }
  }, [currentInput])

  const addTodoHandler = (e) => {
    e.preventDefault()
    if (currentInput.title !== "" && input !== "") {
      dispatch(editTodo({ id: currentInput.id, title: input }))
      setInput('')
      setCurrentInput({id: "", title: ""})
      return
    }
    if (!input) return
    dispatch(addTodo(input))
    setInput('')
  }

  const cancelHandler = (e) => {
    e.preventDefault()
    setInput('')
    setCurrentInput({id: "", title: ""})
  }

  return (
    <>
      <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
        <input 
          type='text' 
          placeholder='Enter a Todo'
          className="w-[70%] border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        {currentInput.title ? 
          <button 
            type='submit'
            className="rounded-r-lg px-3 py-1.5 bg-yellow-600 text-white shrink-0 rounded-lg"
          >
            Edit Todo
          </button> 
          :
          <button 
            type='submit'
            className="rounded-r-lg px-3 py-1.5 bg-green-600 text-white shrink-0 rounded-lg"
          >
            Add Todo
          </button>
        }
        <button 
            onClick={cancelHandler}
            className="rounded-r-lg px-3 py-1.5 bg-red-500 text-white shrink-0 rounded-lg"
        >
          Cancel
        </button>
      </form>
    </>
  )
}

export default AddTodo