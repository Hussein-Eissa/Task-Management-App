import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card, Modal } from "react-bootstrap";
import { FaArrowLeft, FaTrash, FaEdit } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "../styles/singleTask/SingleTaskPage.css";

const SingleTaskPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/tasks/${id}`
        );
        setTask(response.data);
      } catch (error) {
        console.error("Error fetching task:", error);
        setTask({
          _id: id,
          name: "Task " + id,
          status: "Not Started",
          priority: "Medium",
          date: new Date().toLocaleDateString(),
          category: "General",
          keywords: [],
          details: "No details available",
        });
      }
    };

    fetchTask();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/tasks/${id}`);
      toast.success("Task deleted successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate(-1);
    } catch (error) {
      console.error("Error deleting task:", error);
      toast.error("Failed to delete task", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  if (!task) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading task details...</p>
      </div>
    );
  }

  return (
    <Container fluid className="single-task-container">
      <Card className="single-task-card">
        <div className="card-header">
          <Row className="align-items-center">
            <Col xs={6}>
              <Button
                variant="light"
                className="go-back-btn"
                onClick={() => navigate(-1)}
              >
                <FaArrowLeft className="icon" /> Go Back
              </Button>
            </Col>
            <Col xs={6} className="text-end">
              <h3 className="card-title">Task Details</h3>
            </Col>
          </Row>
        </div>

        <Card.Body className="card-body">
          <Row>
            <Col md={6}>
              <div className="info-group">
                <p>
                  <strong>ID:</strong> {task._id}
                </p>
                <p>
                  <strong>Name:</strong> {task.name}
                </p>
                <p>
                  <strong>Status:</strong>{" "}
                  <span
                    className={
                      task.status === "Completed"
                        ? "status-completed"
                        : "status-not-completed"
                    }
                  >
                    {task.status}
                  </span>
                </p>
                <p>
                  <strong>Priority:</strong>{" "}
                  <span
                    className={
                      task.priority === "High"
                        ? "priority-high"
                        : task.priority === "Medium"
                        ? "priority-medium"
                        : "priority-low"
                    }
                  >
                    {task.priority}
                  </span>
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="info-group">
                <p>
                  <strong>Due Date:</strong>{" "}
                  {task.date || task.dueDate || "No date available"}
                </p>
                <p>
                  <strong>Category:</strong> {task.category}
                </p>
                <p>
                  <strong>Keywords:</strong>
                </p>
                <div className="keywords-container">
                  {task.keywords &&
                    task.keywords.map((keyword, index) => (
                      <span
                        key={index}
                        className="keyword-tag"
                        style={{
                          backgroundColor: keyword.color || "#a3bffa",
                          color: "#fff",
                        }}
                      >
                        {keyword.text || keyword}
                      </span>
                    ))}
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <div className="details-section">
                <p>
                  <strong>Details:</strong>{" "}
                  {task.details || "No details available"}
                </p>
              </div>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col className="d-flex justify-content-between">
              <Button
                className="edit-btn"
                onClick={() => navigate(`/task/${id}/edit`)}
              >
                <FaEdit className="icon" /> Edit
              </Button>
              <Button
                variant="danger"
                className="delete-btn"
                onClick={() => setShowDeleteModal(true)}
              >
                <FaTrash className="icon" /> Delete
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Delete Confirmation Modal */}
      <Modal
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        centered
        className="delete-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this task? This action cannot be
          undone.
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowDeleteModal(false)}
            className="cancel-btn"
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              handleDelete();
              setShowDeleteModal(false);
            }}
            className="confirm-delete-btn"
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default SingleTaskPage;
