import React, { useState } from "react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import { Modal, Button } from "react-bootstrap";
import { useModal } from "../../Context/CategoryContext";

const TaskItem = ({
  task,
  handleEdit, // دالة جديدة هتفتح الـ Modal مع بيانات المهمة
  handleDelete,
  handleView,
}) => {
  const { categories } = useModal(); // جلب الـ categories من الـ Context
  const getCategoryColor = (category) => {
    const foundCategory = categories.find((cat) => cat.text === category);
    return foundCategory ? foundCategory.color : "#3ee6bc"; // اللون الافتراضي
  };

  // تحديد لون الـ badge بناءً على قيمة Priority
  const getPriorityBackgroundColor = (priority) => {
    switch (priority?.toLowerCase()) {
      case "high":
        return "#ff3f61"; // أحمر فاتح
      case "medium":
        return "#ffcc5c"; // أصفر فاتح
      case "low":
        return "#88d8b0"; // أخضر فاتح
      default:
        return "#ffffff"; // أبيض (افتراضي)
    }
  };

  // State للتحكم في ظهور الـ Modal بتاع التأكيد للحذف
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // فتح الـ Modal
  const handleShowDeleteModal = () => setShowDeleteModal(true);

  // إغلاق الـ Modal
  const handleCloseDeleteModal = () => setShowDeleteModal(false);

  // تأكيد الحذف
  const confirmDelete = () => {
    handleDelete(task._id); // تنفيذ دالة الحذف
    handleCloseDeleteModal(); // إغلاق الـ Modal
  };

  return (
    <>
      <div className="row">
        <div className="card shadow h-100 mb-3 " style={{ maxWidth: "20rem" }}>
          <div className="card-header bg-white border-bottom py-3">
            <h4 className="card-title mb-0">{task.name}</h4>
          </div>
          <div className="card-body py-4  ">
            <div className="mb-3">
              <span
                className="badge rounded-pill"
                style={{
                  // backgroundColor: getCategoryColor(task.category),
                  color: getCategoryColor(task.category),
                  border: "1px solid",
                  borderColor: getCategoryColor(task.category),
                  padding: "10px 15px",
                  fontSize: "1rem",
                }}
              >
                {task.category}
              </span>
            </div>
            <div className="mb-3">
              <span
                className="badge rounded-pill"
                style={{
                  backgroundColor: getPriorityBackgroundColor(task.priority),
                  color: "#000",
                  padding: "10px 15px",
                  fontSize: "1rem",
                  // border:'none'
                }}
              >
                {task.priority}
              </span>
            </div>
            <div>
              <span
                className="text-muted "
                style={{ fontSize: "1rem", color: "#000" }}
              >
                {task.date}
              </span>
            </div>
          </div>
          <div className="card-footer bg-white border-top d-flex justify-content-between gap-3 py-3">
            <button
              className="btn btn-outline-primary d-flex align-items-center"
              onClick={() => handleEdit(task)}
              title="Edit"
              style={{ border: "none" }}
            >
              <FaEdit style={{ color: "blue", fontSize: "20px" }} />
            </button>
            <button
              className="btn btn-outline-danger  d-flex align-items-center"
              onClick={handleShowDeleteModal}
              title="Delete"
              style={{ border: "none" }}
            >
              <FaTrash style={{ color: "red", fontSize: "20px" }} />
            </button>
            <button
              className="btn btn-outline-success  d-flex align-items-center gap-2"
              onClick={() => handleView(task._id)}
              title="View Details"
              style={{ border: "none" }}
            >
              <FaEye style={{ color: "green", fontSize: "20px" }} />
            </button>
          </div>
        </div>
      </div>

      {/* Modal التأكيد بتاع الحذف */}
      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete the task "{task.name}"?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteModal}>
            No
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TaskItem;
// import React from 'react';
// import styles from './styles/Tasks.module.css';
// import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';

// const TaskItem = ({
//   task,
//   editingTaskId,
//   handleEdit,
//   handleSave,
//   handleDelete,
//   handleView,
//   handleChange,
// }) => {
//   // تحديد لون الـ badge بناءً على قيمة Priority
//   const getPriorityBackgroundColor = (priority) => {
//     switch (priority?.toLowerCase()) {
//       case 'high':
//         return '#ff3f61'; // أحمر فاتح
//       case 'medium':
//         return '#ffcc5c'; // أصفر فاتح
//       case 'low':
//         return '#88d8b0'; // أخضر فاتح
//       default:
//         return '#ffffff'; // أبيض (افتراضي)
//     }
//   };

//   return (
//     <tr key={task.id}>
//       <td>
//         {editingTaskId === task.id ? (
//           <input
//             type="text"
//             value={task.name || ''}
//             className={styles.inputTitle}
//             onChange={(e) => handleChange(task.id, 'name', e.target.value)}
//           />
//         ) : (
//           task.name
//         )}
//       </td>
//       <td>
//         {editingTaskId === task.id ? (
//           <select
//             value={task.priority || 'Medium'}
//             className={styles.select}
//             onChange={(e) => handleChange(task.id, 'priority', e.target.value)}
//           >
//             <option value="High">High</option>
//             <option value="Medium">Medium</option>
//             <option value="Low">Low</option>
//           </select>
//         ) : (
//           <span
//             className="badge rounded-pill"
//             style={{
//               backgroundColor: getPriorityBackgroundColor(task.priority),
//               color: '#000',
//               padding: '10px 15px',
//             }}
//           >
//             {task.priority}
//           </span>
//         )}
//       </td>
//       <td>
//         {editingTaskId === task.id ? (
//           <input
//             type="date"
//             value={task.date ? new Date(task.date).toISOString().slice(0, 10) : ''}
//             className={styles.date}
//             onChange={(e) => handleChange(task.id, 'date', e.target.value)}
//           />
//         ) : (
//           task.date
//         )}
//       </td>
//       <td>
//         {editingTaskId === task.id ? (
//           <button className={styles.editBtn} onClick={() => handleSave(task.id)}>
//             <FaEdit style={{ color: 'blue' }} /> save
//           </button>
//         ) : (
//           <button className={styles.editBtn} onClick={() => handleEdit(task.id)}>
//             <FaEdit style={{ color: 'blue' }} /> edit
//           </button>
//         )}
//       </td>
//       <td>
//         <button className={styles.deleteBtn} onClick={() => handleDelete(task.id)}>
//           <FaTrash style={{ color: 'red' }} /> delete
//         </button>
//       </td>
//       <td>
//         <button className={styles.editBtn} onClick={() => handleView(task.id)}>
//           <FaEye style={{ color: 'green' }} /> details
//         </button>
//       </td>
//     </tr>
//   );
// };

// export default TaskItem;
