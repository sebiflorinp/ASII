import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";


import "../index.css";

function RegisterPage() {
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/v1/auth/users/me')
            .then(response => response.json())
            .then(data => console.log(data))
    })

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");
    const [allergens, setAllergens] = useState("");
    const [dietary, setDietary] = useState("");
    const [height, setHeight] = useState();
    const [gender, setGender] = useState("");
    const [weight, setWeight] = useState();

    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleBackLogin = () => {
        navigate("/");
    }

    const preventLetters = (e) => {
        if (e.key === 'Backspace' || e.key === 'Delete') {
            return;
        }

        if (!/[0-9]/.test(e.key)) {
            e.preventDefault();
        }
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (confirmPassword !== password) {
            setError("The passwords needs to be the same")
        }

        if (username === "" || password === "" || confirmPassword === "" || allergens === "" || dietary === "" || height === null || gender === "" || weight === null) {
            setError("All fields needs to be filled");
        } else {
            // login logic stuff here
        }
    }

    return (
        <div className="h-screen bg-gradient-to-tr from-teal-400 to-teal-950 flex items-center justify-center relative">
            <div className="w-128 h-128 bg-green-white flex items-center justify-center relative z-10 flex-shrink-0">
                <div>
                    <h1 className="flex text-2xl font-bold text-center text-green-light pb-10 content-center justify-center">The
                        beginning is
                        here:</h1>
                    <form className="justify-center content-center flex flex-col space-y-5"
                          onSubmit={handleSubmit}>

                        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text"
                               placeholder="Username..."
                               className="px-3 py-2 focus:outline focus:outline-1 bg-auth-green rounded-xl"/>
                        <div className="grid grid-cols-2 gap-2">
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password"
                                   placeholder="Password..."
                                   className="px-3 py-2 focus:outline focus:outline-1 bg-auth-green rounded-xl"/>
                            <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                                   type="password"
                                   placeholder="Retype..."
                                   className="px-3 py-2 focus:outline focus:outline-1 bg-auth-green rounded-xl"/>
                            <input value={allergens} onChange={(e) => setAllergens(e.target.value)}
                                   placeholder="Alergens..."
                                   className="px-3 py-2 focus:outline focus:outline-1 bg-auth-green rounded-xl"/>
                            <input value={dietary} onChange={(e) => setDietary(e.target.value)}
                                   placeholder="Dietary..."
                                   className="px-3 py-2 focus:outline focus:outline-1 bg-auth-green rounded-xl"/>
                            <input value={height} onKeyDown={preventLetters}
                                   onChange={(e) => setHeight(e.target.value)} type="number"
                                   placeholder="Height in cm" max="250" min="100"
                                   className="appearance-none px-3 py-2 focus:outline focus:outline-1 bg-auth-green rounded-xl"/>

                            {/*<input value={gender} onChange={(e) => setGender(e.target.value)}
                                    placeholder="M/F"
                                    className="px-3 py-2 focus:outline focus:outline-1 bg-auth-green rounded-xl"/>
                            */}
                            <select value={gender} onChange={(e) => setGender(e.target.value)}
                                    className="appearance-none px-3 py-2 focus:outline focus:outline-1 bg-auth-green rounded-xl">
                                <option className="text-opacity-50" value="">Select Gender</option>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                            </select>
                        </div>
                        <input value={weight} onChange={(e) => setWeight(e.target.value)} type="number"
                               onKeyDown={preventLetters}
                               placeholder="Weight in kg" min="30" max="200"
                               className="appearance-none px-3 py-2 focus:outline focus:outline-1 bg-auth-green rounded-xl"/>
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
                                className="rounded-full px-3 py-2 bg-back-1 text-green-dark text-opacity-50 font-bold focus:outline-none">Register
                            now
                        </button>
                        <button onClick={handleBackLogin}
                                className="w-32 rounded-full px-3 py-2 bg-back-1 text-green-dark text-opacity-50 font-bold focus:outline-none">Or
                            Log in
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

export default RegisterPage;
