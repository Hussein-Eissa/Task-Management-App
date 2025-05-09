// TaskList.js
import React from "react";
import TaskItem from "./TaskItem";
import "bootstrap/dist/css/bootstrap.min.css";

const TaskList = ({ tasks, loading, handleEdit, handleDelete, handleView }) => {
  return (
    <div className="container-fluid m-auto my-4">
      {loading ? (
        <p style={{ fontFamily: "Cairo", fontSize: 20 }}>Loading tasks...</p>
      ) : tasks.length === 0 ? (
        <p style={{ fontFamily: "Cairo", fontSize: 20 }}>No tasks available.</p>
      ) : (
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-3">
          {tasks.map((task) => (
            <div key={task.id || `${task.name}-${task.category}-${task.date}`} className="col">
              <TaskItem
                task={task}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                handleView={handleView}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;