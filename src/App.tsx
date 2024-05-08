import AppLayout from "./layout/AppLayout";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import {toast} from "react-hot-toast";
import ToasterBox from "./ui/ToasterBox";

function App() {

    // This function is used to show a toast notification. It uses the `toast` function from the `react-hot-toast` library
    // delete this function
    const notify = () => toast("Here is your toast message", {
        icon: '🔥',
        style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
        }
    });

    return (
        <>
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
                    <Route path="login" element={<Login/>}/>
                    <Route path="*" element={<h1>Page Not Found</h1>}/>
                </Routes>
            </BrowserRouter>
            <button onClick={notify}>Notify</button> // to be deleted
            <ToasterBox/>
        </>
    )
}

export default App
