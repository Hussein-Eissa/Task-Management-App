import Routes from './appRouter.jsx';
import { RouterProvider } from 'react-router-dom';
import { ModalProvider } from "./Context/CategoryContext.jsx";
import { ThemeProvider } from "./Context/ThemeContext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

export default App;

import React, { useContext } from "react";
import { ThemeContext } from './Context/ThemeContext';

function ThemedApp() {
  const { themeClass } = useContext(ThemeContext);

  return (
    <div className={`min-vh-100 ${themeClass}`}>
      <div className="container-fluid p-0 m-0"> 
        <ToastContainer />
        <ModalProvider>
          <RouterProvider router={Routes} />
        </ModalProvider>
      </div>
    </div>
  );
}
