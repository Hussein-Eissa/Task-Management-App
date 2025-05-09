// ده هيكون الكومبوننت الرئيسي اللي بيجمع كل الكومبوننتات الأخرى ويتعامل مع هيكل الـ Modal.
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { MdOutlineTask } from "react-icons/md";
import ModalForm from './ModalForm';
import ModalKeywords from './ModalKeywords';
import ModalFooter from './ModalFooter.JSX';

const Modal = ({ newTask, setNewTask, handleAddTask, handleUpdateTask, closeModal, isEditing }) => {
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('modal')) {
      closeModal();
    }
  };

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
      onClick={handleBackdropClick}
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-md">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title fw-bold fs-3">
              <MdOutlineTask style={{ color: "#6366F1", fontSize: "28" }} /> {isEditing ? 'Edit Task' : 'Add New Task'}
            </h5>
          </div>
          <div className="modal-body">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (isEditing) {
                  handleUpdateTask();
                } else {
                  handleAddTask();
                }
              }}
              onClick={(e) => e.stopPropagation()}
              className="d-flex flex-column gap-3"
            >
              <ModalForm newTask={newTask} setNewTask={setNewTask} />
              <ModalKeywords newTask={newTask} setNewTask={setNewTask} />
            </form>
          </div>
          <ModalFooter
            isEditing={isEditing}
            handleAddTask={handleAddTask}
            handleUpdateTask={handleUpdateTask}
            closeModal={closeModal}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;








