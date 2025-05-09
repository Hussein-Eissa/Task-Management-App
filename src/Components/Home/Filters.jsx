import React, { useState } from "react";
// import { FaTasks } from "react-icons/fa";
import { MdFilterCenterFocus } from "react-icons/md";
import styles from "../../styles/home/Filters.module.css";

const Filters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    status: "",
    priority: "",
    date: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div>
     
      <div className="text-center p-3">
        
        <h1><MdFilterCenterFocus /> Filters </h1>
      </div>
      <table
        className="table table-bordered justify-content-center align-items-center"
        style={{ width: "100%", height: "100px" }}
      >
        <thead>
          <tr style={{ fontFamily: "Cairo", fontSize: 20 }}>
            <th>Status</th>
            <th>Priority</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div>
                <select
                  name="status"
                  value={filters.status}
                  onChange={handleFilterChange}
                  className={styles.select}
                >
                  <option value="">All</option>
                  <option value="To Do">To Do</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </td>
            <td>
              <div>
                <select
                  name="priority"
                  value={filters.priority}
                  onChange={handleFilterChange}
                  className={styles.select}
                >
                  <option value="">All</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
            </td>
            <td>
              <input
                type="date"
                name="date"
                value={filters.date}
                onChange={handleFilterChange}
                className={styles.date}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
    </div>
  );
};

export default Filters;
