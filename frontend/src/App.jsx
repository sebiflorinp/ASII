import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import LoginPage from './Components/login.jsx';
import RegisterPage from './Components/register.jsx';
import DashboardPage from "./Components/dashboard.jsx";
import Cookies from 'js-cookie';

function App() {
    // Check if the user is authenticated
    const isAuthenticated = () => {
        // Implement your logic to check if the user is authenticated
        const accessToken = Cookies.get('access_token');
        if
        ; // Example: check if access token exists in cookies
    }

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                {/* Protected route */}
                <Route path="/dashboard" element={<DashboardPage/>}/>
                {/* Redirect to dashboard if user is authenticated */}
                {isAuthenticated() && <Navigate to="/dashboard"/>}
            </Routes>
        </Router>
    );
}

export default App;
