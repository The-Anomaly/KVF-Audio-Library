import Login from 'pages/Login';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
       <Route path={'/login' || "/"} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
