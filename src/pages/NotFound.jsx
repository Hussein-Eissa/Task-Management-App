import React from "react";
import { Link } from "react-router-dom";
import "../styles/notfound/notfound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">عذراً، الصفحة غير موجودة</h2>
        <p className="not-found-text">
          يبدو أنك حاولت الوصول إلى صفحة غير موجودة في موقعنا. لا تقلق، يمكنك
          العودة إلى الصفحة الرئيسية والبدء من جديد.
        </p>
        <Link to="/" className="not-found-button">
          العودة للصفحة الرئيسية
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
