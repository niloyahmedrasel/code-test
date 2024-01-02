import React, { useState } from 'react';


function Problem1() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskStatus, setTaskStatus] = useState('Active');

  const addTask = () => {
    if (taskName.trim() === '') {
      return;
    }

    const newTask = { name: taskName, status: taskStatus };
    setTasks([...tasks, newTask]);
    setTaskName('');
  };

  const filterTasks = (status) => {
    setTaskStatus(status);
  };

  const filteredTasks = tasks.filter(task => taskStatus === 'All' || task.status === taskStatus);

  return (
    <div >
      <form>
        <label>
          Task Name:
          <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} required />
        </label>
        <label>
          Task Status:
          <input type="text" value={taskStatus} onChange={(e) => setTaskStatus(e.target.value)} required />
        </label>
        <button type="button" onClick={addTask}>Add Task</button>
      </form>

      <div>
        <button onClick={() => filterTasks('Active')}>Show Active</button>
        <button onClick={() => filterTasks('Completed')}>Show Completed</button>
        <button onClick={() => filterTasks('All')}>Show All</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task, index) => (
            <tr key={index}>
              <td>{task.name}</td>
              <td>{task.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Problem1;
