import { useState } from "react";

const TaskItem = ({ task, oneditTask, ondeleteTask, onToggleComplete }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [oldtask, setOldTask] = useState(task.text);
  const [priority, setPriority] = useState(task.priority);

  function handleSave() {
    oneditTask(task.id, oldtask, priority);
    setIsEditable(false);
  }

  return (
    <li className={`list-group-item p-2 my-2 ${task.completed ? "bg-success text-white" : ""}`}>
      {isEditable ? (
        <>
          <div className="row">
            {/* Task editing form */}
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                value={oldtask}
                onChange={(e) => setOldTask(e.target.value)}
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
              <button className="btn btn-success" onClick={handleSave}>
                Save
              </button>
              <button
                className="btn btn-danger"
                onClick={() => setIsEditable(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="d-flex justify-content-between align-items-center">
          <span>{task.text}</span>
          <div className="edit-feature">
            <span className="text-success">{task.priority}</span>
            <button
              className="btn btn-outline-success mx-1 rounded"
              onClick={() => setIsEditable(true)}
            >
              <i className="bi bi-pencil-square"></i>
            </button>
            <button
              className="btn btn-outline-danger rounded"
              onClick={() => ondeleteTask(task.id)}
            >
              <i className="bi bi-trash3-fill"></i>
            </button>
            <button
              className="btn btn-outline-success mx-1 rounded"
              onClick={() => onToggleComplete(task.id)}
            >
              {task.completed ? "Undo" : "Complete"}
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default TaskItem;
