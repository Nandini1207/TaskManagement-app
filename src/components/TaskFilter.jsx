import React from "react";

const TaskFilter = ({ onSetFilter }) => {
  return (
    <div className="task-filter-container my-2">
      <button
        className="btn btn-outline-secondary p-3"
        onClick={() => onSetFilter("All")}
      >
        All
      </button>
      <button
        className="btn btn-outline-success p-3 mx-2"
        onClick={() => onSetFilter("Completed")}
      >
        Completed
      </button>
      <button
        className="btn btn-outline-danger p-3"
        onClick={() => onSetFilter("Pending")}
      >
        Pending
      </button>
    </div>
  );
};

export default TaskFilter;
