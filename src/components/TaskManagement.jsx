import { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import SearchBar from "./SearchBar";
import TaskFilter from "./TaskFilter";
import api from "../services/api";
import { toast } from "react-toastify";
import TaskItem from "./TaskItem";

const TaskManagement = () => {
  // State for managing tasks
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // For search functionality
  const [filter, setFilter] = useState("All"); // For filter functionality

  // Fetch tasks from the server
  useEffect(() => {
    api
      .get("/tasks")
      .then(({ data }) => setTasks(data))
      .catch((err) => toast.error("Error fetching tasks"));

    return () => {};
  }, []);

  // Add a new task
  let addTask = (text, priority) => {
    const newTask = { text, completed: false, priority };
    api
      .post("/tasks", newTask)
      .then(({ data }) => {
        setTasks([...tasks, data]);
        toast.success("Task added successfully");
      })
      .catch((err) => toast.error("Failed to add task"));
  };

  // Edit an existing task
  let editTask = (id, text, priority) => {
    const updatedTask = { text, completed: false, priority };
    api
      .put(`/tasks/${id}`, updatedTask)
      .then(({ data }) => {
        setTasks(tasks.map((task) => (task.id === id ? data : task)));
        toast.success("Task updated successfully");
      })
      .catch((err) => toast.error("Failed to update task"));
  };

  // Delete a task
  let deleteTask = (id) => {
    api
      .delete(`/tasks/${id}`)
      .then(() => {
        setTasks(tasks.filter((task) => task.id !== id));
        toast.success("Task deleted successfully");
      })
      .catch((err) => toast.error("Failed to delete task"));
  };

  // Toggle the completion status of a task
  let toggleCompleteTask = (id) => {
    const updatedTask = tasks.find((task) => task.id === id);
    updatedTask.completed = !updatedTask.completed;

    api
      .put(`/tasks/${id}`, updatedTask)
      .then(({ data }) => {
        setTasks(tasks.map((task) => (task.id === id ? data : task)));
        toast.success("Task status updated!");
      })
      .catch((err) => toast.error("Failed to update task status"));
  };

  // Handle Search
  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  // Handle Filter
  const handleFilter = (filterOption) => {
    setFilter(filterOption);
  };

  // Filtered and Searched Tasks
  const filteredTasks = tasks
    .filter((task) => {
      if (filter === "Completed") return task.completed;
      if (filter === "Pending") return !task.completed;
      return true;
    })
    .filter((task) => {
      if (searchQuery === "") return true;
      return task.text.toLowerCase().includes(searchQuery);
    });

  return (
    <div className="container my-2 p-2">
      {/* Search and Filter Functionality */}
      <div className="search-functionality">
        <div className="row">
          <div className="col-12 col-sm-8 col-md-8 col-lg-8">
            <SearchBar onSearch={handleSearch} />
          </div>
          <div className="col-12 col-sm-4 col-md-4 col-lg-4">
            <TaskFilter onSetFilter={handleFilter} />
          </div>
        </div>
      </div>

      {/* Task Form */}
      <TaskForm onaddTask={addTask} />

      {/* Task List */}
      <ul className="list-group">
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            oneditTask={editTask}
            ondeleteTask={deleteTask}
            onToggleComplete={toggleCompleteTask} // Pass toggle function here
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskManagement;
