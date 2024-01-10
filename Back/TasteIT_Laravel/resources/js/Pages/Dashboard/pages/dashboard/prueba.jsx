import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { Dashboard, Auth } from "../../layouts";
import { MaterialTailwindControllerProvider } from "../../context/index";

function App() {
  return (
    <BrowserRouter>
      <MaterialTailwindControllerProvider>
        <Routes>
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/auth/*" element={<Auth />} />
          <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
        </Routes>
      </MaterialTailwindControllerProvider>
    </BrowserRouter>
  );
}

export default App;
