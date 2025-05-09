// import React, { useState } from "react";
// import { Button, Form } from "react-bootstrap";
// import { IoIosAddCircle } from "react-icons/io";
// import NewModal from "../common/NewModal";
// import { toast } from "react-toastify";
// import styles from "../../styles/home/CategoryModal.module.css";

// const CategoryModal = () => {
//   const [show, setShow] = useState(false);
//   const [formData, setFormData] = useState({ text: "", color: "#000000" });
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch("http://localhost:3000/api/categories", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     })
//       .then((res) => res.json())
//       .then((newItem) => console.log(newItem))
//       .catch((err) => console.log(err));
//     handleClose();
//     toast.success("category added successfully");
//     //show toast message for success
//   };

//   const modalBody = () => (
//     <Form>
//       <Form.Group controlId="textInput">
//         <Form.Label>Category Name</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Please enter text"
//           name="text"
//           value={formData.text}
//           onChange={handleChange}
//         />
//       </Form.Group>

//       <Form.Group controlId="colorInput" className="mt-3">
//         <Form.Label>Category Color</Form.Label>
//         <Form.Control
//           type="color"
//           name="color"
//           value={formData.color}
//           onChange={handleChange}
//         />
//       </Form.Group>
//     </Form>
//   );

//   const modalFooter = () => (
//     <>
//       <Button variant="secondary" onClick={handleClose}>
//         Cancel
//       </Button>
//       <Button variant="primary" onClick={handleSubmit}>
//         Save
//       </Button>
//     </>
//   );

//   return (
//     <>
//       <button className={styles.btnModal} onClick={() => handleShow()}>
//         {" "}
//         <IoIosAddCircle /> add category
//       </button>

//       <NewModal
//         show={show}
//         handleClose={handleClose}
//         modalHeader="Add Category"
//         modalBody={modalBody}
//         modalFooter={modalFooter}
//       />
//     </>
//   );
// };

// export default CategoryModal;




import React from "react";
import { Button, Form } from "react-bootstrap";
import { IoIosAddCircle } from "react-icons/io";
import NewModal from "../common/NewModal";
import { toast } from "react-toastify";
import styles from "../../styles/home/CategoryModal.module.css";
import { useModal } from "../../Context/CategoryContext"; // تعديل المسار

const CategoryModal = () => {
  const { show, openModal, closeModal, formData, handleChange, handleSubmit } = useModal();

  const modalBody = () => (
    <Form>
      <Form.Group controlId="textInput">
        <Form.Label>Category Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Please enter text"
          name="text"
          value={formData.text}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="colorInput" className="mt-3">
        <Form.Label>Category Color</Form.Label>
        <Form.Control
          type="color"
          name="color"
          value={formData.color}
          onChange={handleChange}
        />
      </Form.Group>
    </Form>
  );

  const modalFooter = () => (
    <>
      <Button variant="secondary" onClick={closeModal}>
        Cancel
      </Button>
      <Button
        variant="primary"
        onClick={() => {
          handleSubmit();
          toast.success("Category saved successfully");
        }}
      >
        Save
      </Button>
    </>
  );

  return (
    <>
      <button className={styles.btnModal} onClick={() => openModal()}>
        <IoIosAddCircle /> Add Category
      </button>

      <NewModal
        show={show}
        handleClose={closeModal}
        modalHeader={formData._id ? "Edit Category" : "Add Category"}
        modalBody={modalBody}
        modalFooter={modalFooter}
      />
    </>
  );
};

export default CategoryModal;