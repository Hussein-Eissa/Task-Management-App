import { useEffect, useState } from "react";
import { useModal } from "./CategoryContext";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Modal, Button } from "react-bootstrap";

const ItemList = ({ onCategoryClick }) => {
  const { categories, openModal, deleteCategory } = useModal();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/categories")
      .then((res) => res.json())
      .catch((err) => console.error("فشل في جلب البيانات:", err));
  }, []);

  const handleDeleteClick = (category, index) => {
    setCategoryToDelete({ category, index });
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    if (categoryToDelete) {
      deleteCategory(categoryToDelete.index);
      setShowDeleteModal(false);
      setCategoryToDelete(null);
    }
  };

  return (
    <>
      <div className="container-fluid w-100 bg-white p-0 rounded shadow-sm mb-4">
        <ul
          className="list-group p-0 m-0"
          style={{ backgroundColor: "#f0f0f0" }}
        >
          <li className="m-0 list-group-item d-flex justify-content-between align-items-center border-0">
            <div>
              <span
                style={{
                  color: "#4f46e5",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
                onClick={() => onCategoryClick("")}
              >
                All Categories
              </span>
            </div>
          </li>
          {categories.length === 0 && (
            <li className="p-0 m-3 mt-1 mb-1">No Category</li>
          )}
          {categories.map((item, index) => (
            <li
              key={index}
              className="m-0 list-group-item d-flex justify-content-between align-items-center border-0"
            >
              <div>
                <span
                  style={{ color: item.color, cursor: "pointer" }}
                  onClick={() => onCategoryClick(item.text)}
                >
                  {item.text}
                </span>
              </div>
              <div>
                <button
                  className="btn btn-sm btn-outline-secondary me-2"
                  onClick={() => openModal(item, index)}
                  style={{ backgroundColor: "white", border: "none" }}
                >
                  <FaEdit style={{ color: "blue" }} />
                </button>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => handleDeleteClick(item, index)}
                  style={{ backgroundColor: "white", border: "none" }}
                >
                  <FaTrash style={{ color: "red" }} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Delete Confirmation Modal */}
      <Modal
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        centered
        className="delete-category-modal"
      >
        <Modal.Header closeButton style={{ borderBottom: "none" }}>
          <Modal.Title style={{ color: "#dc3545" }}>
            Delete Category
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center py-4">
          <div className="mb-4">
            <FaTrash size={50} style={{ color: "#dc3545" }} />
          </div>
          <p className="mb-0">
            Are you sure you want to delete the category{" "}
            <strong style={{ color: categoryToDelete?.category.color }}>
              {categoryToDelete?.category.text}
            </strong>
            ?
          </p>
          <p className="text-muted mt-2">
            This action will also delete all tasks associated with this
            category.
          </p>
        </Modal.Body>
        <Modal.Footer style={{ borderTop: "none", justifyContent: "center" }}>
          <Button
            variant="secondary"
            onClick={() => setShowDeleteModal(false)}
            style={{
              backgroundColor: "#6c757d",
              border: "none",
              padding: "8px 20px",
              marginRight: "10px",
            }}
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={handleConfirmDelete}
            style={{
              backgroundColor: "#dc3545",
              border: "none",
              padding: "8px 20px",
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ItemList;
