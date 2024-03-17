import {useState} from "react";
import {useNavigate} from "react-router-dom";
import "../index.css";
import Cookies from "js-cookie";

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleReg = () => {
        navigate("/register");
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === "" || password === "") {
            setError("Username or Password cannot be empty");
        } else {
            fetch("http://127.0.0.1:8000/api/v1/auth/jwt/create/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`Failed to login. Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then((data) => {
                    const {access, refresh} = data;

                    //document.cookie = `access_token=${access}; path=/`;
                    Cookies.set('refresh_token', `${refresh}`, {expires: 7});
                    Cookies.set('access_token', `${access}`, {expires: 7});
                    // Redirect to dashboard upon successful login
                    navigate("/dashboard");
                })
                .catch((error) => {
                    setError("Failed to login. Please check your credentials.");
                    console.error("Login error:", error); // Log detailed error for debugging
                });
        }
    };


    return (
        <div className="h-screen bg-gradient-to-tr from-teal-400 to-teal-950 flex items-center justify-center relative">
            <div className="w-128 h-128 bg-green-white flex items-center justify-center relative z-10 flex-shrink-0">
                <div>
                    <h1 className="text-2xl font-bold text-center text-green-light pb-10">Welcome back!</h1>
                    {/*<span>{refreshToken}</span>*/}
                    <form className="h-52 w-72 justify-center content-center flex flex-col space-y-5"
                          onSubmit={handleSubmit}>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text"
                               placeholder="Username..."
                               className="px-3 py-2 focus:outline focus:outline-1 bg-auth-green rounded-xl"/>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password"
                               placeholder="Password..."
                               className="px-3 py-2 focus:outline focus:outline-1 bg-auth-green rounded-xl"/>
                        {error && (
                            <div className="flex items-center p-2 mb-4 text-sm text-red-800 rounded-xl bg-red-50">
                                <svg className="text-wrap w-4 h-4 me-3" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                                </svg>
                                <span className="sr-only">Info</span>
                                <div>
                                    {error}
                                </div>
                            </div>
                        )}

                        <button type="submit"
                                className="rounded-full px-3 py-2 bg-back-1 text-green-dark text-opacity-50 font-bold focus:outline-none">Login
                        </button>
                        <button onClick={handleReg}
                                className="rounded-full px-3 py-2 bg-back-1 text-green-dark text-opacity-50 font-bold focus:outline-none">Register
                            now
                        </button>
                    </form>

                </div>
            </div>
            <div
                className="absolute transform translate-x-4 translate-y-5 w-128 h-128 bg-back-1 opacity-40 flex-shrink-0">
            </div>
        </div>
    );
}

export default LoginPage;
