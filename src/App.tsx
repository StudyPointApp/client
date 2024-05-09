import AppLayout from "./layout/AppLayout";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
   
import Login from "./pages/Login";

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route element={<AppLayout/>}>
                  <Route index element={<Navigate replace to='dashboard'/>}/>
                  <Route path="dashboard" element={<h1>Dashboard</h1>}/>
                  {/* admin */}
                  <Route path="users" element={<h1>Users</h1>}/>
                  <Route path="review" element={<h1>Review</h1>}/>
                  <Route path="upload" element={<h1>Upload</h1>}/>
                  {/* users */}
                  <Route path="status" element={<h1>Status</h1>}/>
                  <Route path="activity" element={<h1>Activities</h1>}/>
                  <Route path="settings" element={<h1>Settings</h1>}/>
              </Route>
              <Route path="login" element={<h1>Login</h1>}/>
              <Route path="*" element={<h1>Page Not Found</h1>}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App
