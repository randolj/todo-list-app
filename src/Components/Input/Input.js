import React, {useState} from 'react'
import "./Input.css"

export const Input = ({onSubmit}) => {
    const [input, setInput] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = () => {
        if (!input) return;
        
        console.log("Submitting:", { title: input, description: description });
        onSubmit({
          title: input,
          description: description
      });

        setInput("");
        setDescription("");
    }

  return (
    <div className='container'>
      <div className='input-group'>
          <input type="text" className='input' placeholder='Task Name' value={input} onChange={e => setInput(e.target.value)} ></input>
          <input type='text' className='description' placeholder='Description' value={description} onChange={e => setDescription(e.target.value)}></input>
        </div>
      <button onClick={handleSubmit} >Add task</button>
    </div>
  )
}
