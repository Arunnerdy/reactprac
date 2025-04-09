import React, { useState } from 'react';


export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleAddOrEditTask = () => {
    if (!title || !description) return;

    const newTask = { title, description };

    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = newTask;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, newTask]);
    }

    setTitle('');
    setDescription('');
  };

  const handleEdit = (index) => {
    setTitle(tasks[index].title);
    setDescription(tasks[index].description);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
    if (editIndex === index) {
      setEditIndex(null);
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div className="task-manager">
      <h1 className="task-manager-title">Task Manager</h1>

      <div className="task-input-section">
        <input
          className="task-input"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="task-textarea"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="task-button" onClick={handleAddOrEditTask}>
          {editIndex !== null ? 'Update Task' : 'Add Task'}
        </button>
      </div>

      <div className="task-list">
        {tasks.map((task, index) => (
          <div key={index} className="task-card">
            <div className="task-content">
              <h2 className="task-title">{task.title}</h2>
              <p className="task-desc">{task.description}</p>
            </div>
            <div className="task-actions">
              <button className="task-edit" onClick={() => handleEdit(index)}>Edit</button>
              <button className="task-delete" onClick={() => handleDelete(index)}>Delete</button>  
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
