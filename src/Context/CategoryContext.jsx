import React, { createContext, useContext, useState, useEffect } from "react";

const ModalContext = createContext();
export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({ text: "", color: "#000000" });
  const [categories, setCategories] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [refreshTasksTrigger, setRefreshTasksTrigger] = useState(0); // State جديد لتحديث الـ Tasks

  // تحميل البيانات من API
  useEffect(() => {
    fetch("http://localhost:3000/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("فشل في جلب البيانات:", err));
  }, []);

  const openModal = (item = null, index = null) => {
    if (item) {
      setFormData(item);
      setEditIndex(index);
    } else {
      setFormData({ text: "", color: "#000000" });
      setEditIndex(null);
    }
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
    setFormData({ text: "", color: "#000000" });
    setEditIndex(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      if (editIndex !== null) {
        // تحديث
        const response = await fetch(`http://localhost:3000/api/categories/${formData._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const updatedCategory = await response.json();
        setCategories((prev) =>
          prev.map((cat, i) => (i === editIndex ? updatedCategory : cat))
        );
      } else {
        // إضافة
        const response = await fetch("http://localhost:3000/api/categories", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const newItem = await response.json();
        setCategories((prev) => [...prev, newItem]);
      }
      setRefreshTasksTrigger((prev) => prev + 1); // Trigger تحديث الـ Tasks
      closeModal();
    } catch (err) {
      console.error("فشل في العملية:", err);
    }
  };

  const deleteCategory = async (index) => {
    try {
      const categoryToDelete = categories[index];
      await fetch(`http://localhost:3000/api/categories/${categoryToDelete._id}`, {
        method: "DELETE",
      });
      setCategories((prev) => prev.filter((_, i) => i !== index));
      setRefreshTasksTrigger((prev) => prev + 1); // Trigger تحديث الـ Tasks
    } catch (err) {
      console.error("فشل في الحذف:", err);
    }
  };

  return (
    <ModalContext.Provider
      value={{
        show,
        openModal,
        closeModal,
        formData,
        handleChange,
        handleSubmit,
        categories,
        deleteCategory,
        refreshTasksTrigger, // أضفنا ده للـ Context
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};