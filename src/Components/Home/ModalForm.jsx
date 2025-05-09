import React from "react";
import { useModal } from "../../Context/CategoryContext"; 



const ModalForm = ({ newTask, setNewTask }) => {
  const { categories } = useModal();

  return (
    <>
      <div className="d-flex flex-column gap-1">
        <label htmlFor="title" className="fw-bolder">
          Task Name
        </label>
        <input
          className="bg-light p-2 rounded border form-control"
          type="text"
          placeholder="Task Name"
          name="title"
          id="title"
          value={newTask.name}
          onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
        />
      </div>
      <div className="row">
        <div className="col-md-6 d-flex flex-column gap-1">
          <label htmlFor="category" className="fw-bolder">
            Category
          </label>
          <select
            className="bg-light p-2 rounded border form-select"
            name="category"
            id="category"
            value={newTask.category}
            onChange={(e) => setNewTask({ ...newTask, category: e.target.value })}
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category._id} value={category.text}>
                {category.text}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-6 d-flex flex-column gap-1">
          <label htmlFor="dueDate" className="fw-bolder">
            Due Date
          </label>
          <input
            className="bg-light p-2 rounded border form-control"
            type="date"
            name="dueDate"
            id="dueDate"
            value={newTask.date || ""}
            onChange={(e) => setNewTask({ ...newTask, date: e.target.value })}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 d-flex flex-column gap-1">
          <label htmlFor="priority" className="fw-bolder">
            Select Priority
          </label>
          <select
            className="bg-light p-2 rounded border form-select"
            name="priority"
            value={newTask.priority}
            onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div className="col-md-6 d-flex flex-column gap-1">
          <label htmlFor="status" className="fw-bolder">
            Status
          </label>
          <select
            className="bg-light p-2 rounded border form-select"
            name="status"
            value={newTask.status}
            onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
          >
            <option value="">Select Status</option>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>
      <div className="d-flex flex-column gap-1">
        <label htmlFor="details" className="fw-bolder">
          Details
        </label>
        <textarea
          className="bg-light p-2 rounded border form-control"
          placeholder="Task details"
          name="details"
          id="details"
          value={newTask.details || ""}
          onChange={(e) => setNewTask({ ...newTask, details: e.target.value })}
          rows="3"
        />
      </div>
    </>
  );
};

export default ModalForm;