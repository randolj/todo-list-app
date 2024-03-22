import React, {useState} from 'react'

export const Input = ({onSubmit}) => {
    const [input, setInput] = useState("")

    const handleSubmit = () => {
        if (!input) return;

        onSubmit(input);

        setInput("")
    }

  return (
    <div className='container'>
        <input type="text" className='input' value={input} onChange={e => setInput(e.target.value)} ></input>
        <button onClick={handleSubmit} >Add task</button>
    </div>
  )
}
