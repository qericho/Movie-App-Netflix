import { useRef, useState } from "react";
import { auth } from "../firebase";

const SignInScreen = () => {
    const [signUp, setSignUp] = useState(false);
    const [error, setError] = useState("");
    const emailRef = useRef(null);
    const passRef = useRef(null);

    const validateForm = () => {
        const email = emailRef.current.value.trim();
        const password = passRef.current.value.trim();

        if (!email || !password) {
            setError("Please fill in all fields.");
            return false;
        }

        // Simple email regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
            return false;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return false;
        }

        setError(""); // clear errors
        return true;
    };

    const register = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        auth
            .createUserWithEmailAndPassword(
                emailRef.current.value,
                passRef.current.value
            )
            .then((userAuth) => {
                alert("Registration Successful!");
            })
            .catch((err) => {
                setError("Failed to register. Try a different email.");
            });
    };

    const signIn = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        auth
            .signInWithEmailAndPassword(
                emailRef.current.value,
                passRef.current.value
            )
            .then((authUser) => {
                alert("Login Successful!");
            })
            .catch((err) => {
                setError("Invalid email or password.");
            });
    };

    return (
        <form
            className="w-full md:w-[500px] h-[500px] bg-[#000] rounded
            absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
        >
            <h1 className="text-2xl md:text-4xl font-bold absolute top-14 left-10">
                {signUp ? "Sign Up" : "Sign In"}
            </h1>

            <div className="px-10 py-30 space-y-5 relative h-full w-full flex flex-col items-center justify-center">
                <input
                    ref={emailRef}
                    className="w-full text-black bg-white px-5 py-3 outline-none"
                    type="email"
                    placeholder="Email"
                />
                <input
                    ref={passRef}
                    className="w-full text-black bg-white px-5 py-3 outline-none"
                    type="password"
                    placeholder="Password"
                />

                {/* Display validation errors */}
                {error && (
                    <p className="text-red-500 text-sm font-semibold">{error}</p>
                )}

                {signUp ? (
                    <button
                        onClick={register}
                        type="submit"
                        className="w-full px-5 py-3 bg-red-600 hover:bg-red-700 text-[18px] font-semibold rounded cursor-pointer"
                    >
                        Sign Up
                    </button>
                ) : (
                    <button
                        onClick={signIn}
                        type="submit"
                        className="w-full px-5 py-3 bg-red-600 hover:bg-red-700 text-[18px] font-semibold rounded cursor-pointer"
                    >
                        Sign In
                    </button>
                )}

                <p className="text-gray-500 font-medium absolute bottom-10 left-10">
                    {signUp ? "Already have an account?" : "New to Netflix?"}{" "}
                    <span
                        onClick={() => {
                            setSignUp((prev) => !prev);
                            setError(""); // clear error when switching form
                        }}
                        className="text-white hover:underline cursor-pointer"
                    >
                        {signUp ? "Sign In" : "Sign Up now"}
                    </span>
                </p>
            </div>
        </form>
    );
};

export default SignInScreen;
