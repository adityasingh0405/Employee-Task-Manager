import React, { useState } from 'react';

const Createtask = () => {

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [assignedUser, setAssignedUser] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [description, setDescription] = useState('');

 const [task, setTask] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setTask({title,category,description,dueDate,active:false,newTask:true,failed:false,completed:false})
    const data = JSON.parse(localStorage.getItem('employees'))
    
    data.forEach(elem => {
      if(assignedUser == elem.firstName){
        elem.tasks.push(task)
        console.log(elem)
      }
    });

    setTitle('');
    setCategory('');
    setAssignedUser('');
    setDueDate('');
    setDescription('');
  };

  const isFormValid = title && category && assignedUser && dueDate && description;

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mb-6">
      <h2 className="text-2xl font-semibold mb-4">Create a New Task</h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task Title"
            className="border p-2 rounded-md w-full"
          />
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category"
            className="border p-2 rounded-md w-full"
          />
          <input
            type="text"
            value={assignedUser}
            onChange={(e) => setAssignedUser(e.target.value)}
            placeholder="Assign to User"
            className="border p-2 rounded-md w-full"
          />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="border p-2 rounded-md w-full"
          />
        </div>

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task Description"
          className="border p-2 rounded-md w-full mt-4"
        ></textarea>

        <button
          type="submit"
          className={`bg-blue-500 text-white px-4 py-2 mt-4 rounded-md ${isFormValid ? 'hover:bg-blue-600' : 'cursor-not-allowed opacity-50'}`}
          disabled={!isFormValid}
        >
          Publish Task
        </button>
      </form>
    </div>
  );
};

export default Createtask;
