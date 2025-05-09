// import React, { useState } from "react";
// import { FiSearch, FiMenu } from "react-icons/fi";
// import styles from "../../styles/home/Section.module.css";
// import logo from "../../assets/22a3ab16269821.562a8602153f7.png"; // Ensure the path is correct

// const Navbar = ({ onSearchChange }) => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearchChange = (e) => {
//     const value = e.target.value;
//     setSearchQuery(value);
//     onSearchChange(value);
//   };

//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.navLeft}>
//         <div className={styles.logo}>
//           <span className={styles.logoIcon}><img src={logo} alt="Logo" style={{height:'30px'}} /></span>
//           <span className={styles.logoText}>TaskManager</span>
//         </div>
//         {/* <button className={styles.menuButton}>
//           <FiMenu size={20} />
//         </button> */}
//       </div>

//       <div className={styles.searchBar}>
//         <FiSearch className={styles.searchIcon} />
//         <input
//           type="text"
//           placeholder="Search tasks..."
//           value={searchQuery}
//           onChange={handleSearchChange}
//         />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




// import React, { useState, useContext } from "react";
// import { FiSearch, FiSun, FiMoon } from "react-icons/fi";
// import styles from "../../styles/home/Section.module.css";
// import logo from "../../assets/22a3ab16269821.562a8602153f7.png";
// import { ThemeContext } from "../../Context/ThemeContext"; // تأكد من المسار

// const Navbar = ({ onSearchChange }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const { darkMode, toggleTheme } = useContext(ThemeContext); // ← هنا نجيب الثيم

//   const handleSearchChange = (e) => {
//     const value = e.target.value;
//     setSearchQuery(value);
//     onSearchChange(value);
//   };

//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.navLeft}>
//         <div className={styles.logo}>
//           <span className={styles.logoIcon}>
//             <img src={logo} alt="Logo" style={{ height: '30px' }} />
//           </span>
//           <span className={styles.logoText}>TaskManager</span>
//         </div>
//       </div>

//       <div className={styles.searchBar}>
//         <FiSearch className={styles.searchIcon} />
//         <input
//           type="text"
//           placeholder="Search tasks..."
//           value={searchQuery}
//           onChange={handleSearchChange}
//         />
//       </div>

//       {/* 🔘 زر الوضع الليلي/النهاري */}
//       <div className={styles.themeToggle}>
//         <button
//           onClick={toggleTheme}
//           className="btn btn-sm btn-outline-secondary ms-3"
//           title={darkMode ? "Light Mode" : "Dark Mode"}
//         >
//           {darkMode ? <FiSun /> : <FiMoon />}
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState, useContext } from "react";
// import { FiSearch, FiSun, FiMoon } from "react-icons/fi";
// import logo from "../../assets/22a3ab16269821.562a8602153f7.png";
// import { ThemeContext } from "../../Context/ThemeContext";
// import "../../styles/home/Section.module.css" // استيراد ملف CSS المخصص

// const Navbar = ({ onSearchChange }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const { darkMode, toggleTheme } = useContext(ThemeContext);

//   const handleSearchChange = (e) => {
//     const value = e.target.value;
//     setSearchQuery(value);
//     onSearchChange(value);
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm mb-4">
//       <div className="container-fluid">
//         {/* اللوجو */}
//         <a className="navbar-brand d-flex align-items-center" href="#">
//           <img src={logo} alt="Logo" style={{ height: "30px" }} className="me-2 rounded-circle" />
//           <span className="logo-text">TaskManager</span>
//         </a>

//         {/* زر Hamburger للشاشات الصغيرة */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarContent"
//           aria-controls="navbarContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* محتوى الـ Navbar */}
//         <div className="collapse navbar-collapse" id="navbarContent">
//           {/* شريط البحث */}
//           <form className="d-flex mx-auto my-2 my-lg-0 search-bar">
//             <div className="input-group ">
//               <span className="input-group-text bg-transparent border-0">
//                 <FiSearch className="search-icon" />
//               </span>
//               <input
//                 type="text"
//                 className="form-control rounded-5 ps-4 pe-4 input-search"
//                 placeholder="Search tasks..."
//                 value={searchQuery}
//                 onChange={handleSearchChange}
//               />
//             </div>
//           </form>

//           {/* زر تبديل الثيم */}
//           <div className="ms-lg-3 my-2 my-lg-0">
//             <button
//               onClick={toggleTheme}
//               className="btn btn-sm btn-outline-secondary"
//               title={darkMode ? "Light Mode" : "Dark Mode"}
//             >
//               {darkMode ? <FiSun /> : <FiMoon />}
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useContext } from "react";
import { FiSearch, FiSun, FiMoon } from "react-icons/fi";
import logo from "../../assets/22a3ab16269821.562a8602153f7.png";
import { ThemeContext } from "../../Context/ThemeContext";
import styles from "../../styles/home/Navbar.module.css"; // استيراد الـ CSS كـ Module

const Navbar = ({ onSearchChange }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearchChange(value);
  };

  return (
    <nav className={`${styles.navbar} navbar navbar-expand-lg navbar-light bg-white shadow-sm mb-4`}>
      <div className="container-fluid">
        {/* اللوجو */}
        <a className={`${styles["navbar-brand"]} navbar-brand d-flex align-items-center`} href="#">
          <img src={logo} alt="Logo" style={{ height: "30px" }} className="me-2 rounded-circle" />
          <span className={styles["logo-text"]}>TaskManager</span>
        </a>

        {/* زر Hamburger للشاشات الصغيرة */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* محتوى الـ Navbar */}
        <div className="collapse navbar-collapse" id="navbarContent">
          {/* شريط البحث */}
          <form className={`${styles["search-bar"]} d-flex mx-auto my-2 my-lg-0`}>
            <div className="input-group d-flex gap-2">
              <span className="input-group-text border-0 pe-0" style={{ background: "transparent" }}>
                <FiSearch className={styles["search-icon"]} />
              </span>
              <input
                type="text"
                className="form-control rounded-4"
                placeholder="Search tasks..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </form>

          {/* زر تبديل الثيم */}
          <div className="ms-lg-3 my-2 my-lg-0">
            <button
              onClick={toggleTheme}
              className="btn btn-sm btn-outline-secondary"
              title={darkMode ? "Light Mode" : "Dark Mode"}
            >
              {darkMode ? <FiSun /> : <FiMoon />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



