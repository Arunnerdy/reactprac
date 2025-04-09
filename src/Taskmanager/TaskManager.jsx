import React, { useState } from 'react'

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const addorEditTasks = () => {
    if(!title || !description) return;

    const newTasks = {title, description};

    if(editIndex !== null){
        const updatedTask = [...tasks];
        updatedTask[editIndex] = newTasks;
        setTasks(updatedTask);
        setEditIndex(null);
    } else {
        setTasks([...tasks, newTasks])
    }

    setTitle('');
    setDescription('');
  }

  const deleteTasks = (index) => {
    setTasks( tasks.filter((_,i) => i !== index));
    if(editIndex === index){
       setEditIndex(null);
       setTitle('');
       setDescription('');
    }
  }

  const editTasks = (index) => {
    setTitle(tasks[index].title);
    setDescription(tasks[index].description);
    setEditIndex(index);
  }
  return (
    <div className='Task-Manager'>
        <h1 className='Task-Manager-Heading'>Task Manager</h1>
        <div className='Task-Inputs'>
            <input className='task-input' value={title} placeholder='Task Title' required onChange={(e) => setTitle(e.target.value)} />

            <textarea className='task-description' value={description} placeholder='Task Description' required onChange={(e)=> setDescription(e.target.value)} />

            <button className='button' onClick={addorEditTasks}> {editIndex !== null ? 'Update Task' : 'Add Task'}</button>
        </div>

        <div className='Task-List'>
           {tasks.map((task,index) => (
            <div className='Task-card' key={index}> 
               <div className='Task-content'> 
                  <h2 className='Task-title'>{task.title}</h2>
                  <p className='Task-description'>{task.description}</p>
               </div>

               <div className='Task-actions'> 
                 <button className='Task-edit' onClick={()=>editTasks(index)}>Edit</button>
                 <button className='Task-delete' onClick={()=>deleteTasks(index)}>Delete</button>
               </div>
            </div>
           ))}
        </div>
    </div>
  )
}

export default TaskManager
