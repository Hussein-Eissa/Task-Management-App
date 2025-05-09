// ده هيكون مسؤول عن الـ footer بتاع الـ Modal
import React from 'react';

const ModalFooter = ({ isEditing, handleAddTask, handleUpdateTask, closeModal }) => {
  return (
    <div className="modal-footer">
      <button
        type="submit"
        className="btn btn-primary"
        onClick={isEditing ? handleUpdateTask : handleAddTask}
      >
        {isEditing ? 'Update Task' : 'Create Task'}
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={closeModal}
      >
        Close
      </button>
    </div>
  );
};

export default ModalFooter;