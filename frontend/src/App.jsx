import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './Components/login.jsx';
import RegisterPage from './Components/register.jsx';
import DashboardPage from "./Components/dashboard.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/dashboard" element={<DashboardPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
