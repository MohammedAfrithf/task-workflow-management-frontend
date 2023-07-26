import React from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import Dashboard from "./pages/dashboard/Dashboard"
import { userInputs, ProjectInputs, TaskInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import { BrowserRouter, Routes, Route, Navigate, Router } from "react-router-dom";
import TaskBoard from "./pages/taskboard/TaskBoard";



function App() {
  const { darkMode } = useContext(DarkModeContext);

  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route path="users">
              <Route
                index
                element={
                  <RequireAuth>
                    <List title="Add New Users" />
                  </RequireAuth>
                }
              />
              <Route
                path=":userId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New inputs={userInputs} title={"Add New Users"} />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="projects">
              <Route
                index
                element={
                  <RequireAuth>
                    <List title="Add New Project" />
                  </RequireAuth>
                }
              />
              <Route
                path=":productId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New inputs={ProjectInputs} title="Add New Project" />
                  </RequireAuth>
                }
              />
            </Route>

            <Route path="dashboard">
              <Route
                index
                element={
                  <RequireAuth>
                    <Dashboard title="Add New Data" />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="tasks">
              <Route
                index
                element={
                  <RequireAuth>
                    <TaskBoard title="Add New Task" />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New inputs={TaskInputs} title="Add New Task" />
                  </RequireAuth>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
// TaskInputs