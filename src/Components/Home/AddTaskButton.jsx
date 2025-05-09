// AddTaskButton.js
import React from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import styles from '../../styles/home/Tasks.module.css';

const AddTaskButton = ({ onClick }) => {
  return (
    <div className="d-flex justify-content-center mt-4">
      <button
        className={styles.addbtn}
        onClick={onClick}
      >
        <MdAddCircleOutline /> Add Task
      </button>
    </div>
  );
};

export default AddTaskButton;