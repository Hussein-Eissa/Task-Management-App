import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import { FaArrowLeft, FaSave } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "../styles/singleTask/SingleTaskPage.css";

const EditTaskPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({
    name: "",
    category: "",
    priority: "Medium",
    date: "",
    status: "",
    keywords: [],
    details: "",
  });

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/tasks/${id}`
        );
        setTask(response.data);
      } catch (error) {
        console.error("Error fetching task:", error);
        toast.error("Failed to load task details");
      }
    };

    fetchTask();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/api/tasks/${id}`, task);
      toast.success("Task updated successfully");
      navigate(`/task/${id}`);
    } catch (error) {
      console.error("Error updating task:", error);
      toast.error("Failed to update task");
    }
  };

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
              <h3 className="card-title">Edit Task</h3>
            </Col>
          </Row>
        </div>

        <Card.Body className="card-body">
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Task Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={task.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Status</Form.Label>
                  <Form.Select
                    name="status"
                    value={task.status}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Status</option>
                    <option value="Not Started">Not Started</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Priority</Form.Label>
                  <Form.Select
                    name="priority"
                    value={task.priority}
                    onChange={handleChange}
                    required
                  >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Due Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="date"
                    value={task.date}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    type="text"
                    name="category"
                    value={task.category}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Details</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="details"
                    value={task.details}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mt-4">
              <Col className="d-flex justify-content-end">
                <Button type="submit" className="save-btn">
                  <FaSave className="icon" /> Save Changes
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EditTaskPage;
