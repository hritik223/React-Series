import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()

    if (input.trim() === '') return

    dispatch(addTodo(input))
    setInput('')
  }

  return (
    <form
      onSubmit={addTodoHandler}
      className="flex w-full max-w-2xl mx-auto mt-12 gap-3"
    >
      <input
        type="text"
        className="flex-1 bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-3"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 hover:bg-indigo-600 rounded"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo