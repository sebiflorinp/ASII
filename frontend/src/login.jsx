import { useEffect, useState } from "react";
import "./index.css";

function LoginPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className="h-screen bg-gradient-to-tr from-teal-400 to-teal-950 flex items-center justify-center relative">
            {/* Front Div (Emerald Div) */}
            <div className="w-96 h-96 bg-green-white flex items-center justify-center relative z-10 flex-shrink-0">
                {/* Content inside the Emerald Div */}
                <div>
                    <h1 className="text-2xl font-bold text-center text-green-light pb-10">Auth Panel</h1>
                    <form className="flex flex-col space-y-5 mt-5" onSubmit={handleSubmit}>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username..." className="px-3 py-2 focus:outline focus:outline-1 bg-auth-green" />
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password..." className="px-3 py-2 focus:outline focus:outline-1 bg-auth-green" />
                        <button type="submit" className="px-3 py-2 bg-teal-400 text-white font-bold focus:outline-none">Login</button>
                    </form>
                </div>
            </div>
            <div className="absolute transform translate-x-4 translate-y-5 w-96 h-96 bg-back-1 opacity-40 flex-shrink-0">
            </div>
        </div>
    );
}

export default LoginPage;
