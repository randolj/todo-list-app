import React, { useState } from 'react';
import './App.css';
import { DndContext, closestCenter, closestCorners } from '@dnd-kit/core';
import { Column } from './Components/Column/Column';
import { arrayMove } from '@dnd-kit/sortable';
import { Input } from './Components/Input/Input';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks(tasks => [...tasks, { id: tasks.length + 1, title: task.title, description: task.description }]);
};

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };
  

  const getTaskPos = id => tasks.findIndex(task => task.id === id)

  const handleDragEnd = event => {
    const {active, over} = event

    if (active.id === over.id ) return;

    setTasks(tasks => {
      const originalPos = getTaskPos(active.id)
      const newPos = getTaskPos(over.id)

      return arrayMove(tasks, originalPos, newPos)
    })
  }

  return (
    <div className="App">
        <h1>To-Do List</h1>
        <Input onSubmit={addTask} />
        <div className='empty-message'>
          {tasks.length === 0 ? <div style={{ marginTop: '200px', fontSize: '20px'}}>No tasks yet!</div> : null}
        </div>
        <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
          <Column tasks={tasks} onDeleteTask={deleteTask}></Column>
        </DndContext>
    </div>
  );
}

export default App;
