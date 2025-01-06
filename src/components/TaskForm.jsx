import React, { useState } from "react";

const TaskForm = ({ onaddTask }) => {
  const [newtask, setNewTask] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleTask = () => {
    if (newtask.trim() !== "") {
      onaddTask(newtask, priority);
      setNewTask("");
      setPriority("Medium");
    }
  };

  return (
    <div className="container my-2">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            className="form-control"
            placeholder="Add a new task"
            value={newtask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </div>
        <div className="col-3">
          <select
            className="form-select"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
            <option value="High">High</option>
          </select>
        </div>
        <div className="col-3">
          <button className="btn btn-success" onClick={handleTask}>
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
