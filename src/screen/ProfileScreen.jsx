import Nav from "../components/Nav"
import { auth } from "../firebase"

export const ProfileScreen = () => {
    const Logout = () => {
        alert("LOGOUT SUMAKSES!")
        auth.signOut()
    }

    return (
        <div>
            <Nav />
            <div className="flex flex-col gap-y-3.5 items-center justify-center md:mt-[15%] mt-[50%]">
                <h1 className="text-center text-red-500 text-3xl md:text-5xl">NOT WORKING ATM!</h1>
                <button onClick={() => Logout()}
                    className="text-white px-10 py-3 cursor-pointer
                     bg-red-700 hover:bg-red-800">
                    SIGN OUT</button>
            </div>
        </div>
    )
}
