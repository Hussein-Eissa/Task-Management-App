// ده هيكون مسؤول عن حقل الـ keywords وإضافة وحذف الـ tag
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const ModalKeywords = ({ newTask, setNewTask }) => {
  const [keyword, setKeyword] = useState('');

  const tagColors = [
    '#ff6f61',
    '#ffcc5c',
    '#88d8b0',
    '#6b7280',
    '#f06292',
  ];

  const getRandomColor = () => {
    return tagColors[Math.floor(Math.random() * tagColors.length)];
  };

  const handleAddKeyword = () => {
    if (keyword.trim()) {
      setNewTask((prev) => ({
        ...prev,
        keywords: [...prev.keywords, { text: keyword, color: getRandomColor() }],
      }));
      setKeyword('');
    }
  };

  const handleRemoveKeyword = (indexToRemove) => {
    setNewTask((prev) => ({
      ...prev,
      keywords: prev.keywords.filter((_, index) => index !== indexToRemove),
    }));
  };

  return (
    <div className="d-flex flex-column gap-1">
      <label htmlFor="keywords" className="fw-bolder">
        Keywords
      </label>
      <input
        className="bg-light p-2 rounded border form-control"
        type="text"
        placeholder="Write keywords"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button
        type="button"
        className="w-50 border-0 rounded p-2 fw-bolder mx-auto btn btn-secondary mt-2"
        onClick={handleAddKeyword}
      >
        Add Keywords
      </button>
      <div className="w-100 mt-2">
        {newTask.keywords.length > 0 && <span>Tags: </span>}
        {newTask.keywords.map((tag, index) => (
          <div
            key={index}
            className="d-inline-flex align-items-center mx-1 px-2 py-1 text-sm font-medium rounded-full"
            style={{ backgroundColor: tag.color, color: '#fff' }}
          >
            <span>{tag.text}</span>
            <button
              type="button"
              className="ms-1 bg-transparent border-0 p-0"
              onClick={() => handleRemoveKeyword(index)}
              style={{ color: '#fff', cursor: 'pointer' }}
            >
              <FaTimes size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModalKeywords;