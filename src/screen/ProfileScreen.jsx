import Nav from "../components/Nav"
import { auth } from "../firebase"
import Avatar from "../assets/img/Avatar.png"
import { selectUser } from "../features/userSlice"
import { useSelector } from "react-redux"

export const ProfileScreen = () => {
    const user = useSelector(selectUser);
    const Logout = () => {
        alert("Logout Succesful!")
        auth.signOut()
    }
    return (
        <div>
            <Nav />
            <div className="flex items-center justify-center h-screen">
                <div className="w-full md:w-[500px] bg-[#0007] text-white px-2 md:px-0">
                    <h1 className="text-3xl md:text-4xl">Edit Profile</h1>
                    <div className="flex md:flex-row flex-col items-start justify-between md:px-0 px-2">
                        <img className="w-[50px] md:w-[80px]"
                            src={Avatar} alt="" />
                        <div className="w-full">
                            <div className="p-2 space-y-3 text-[18px]">
                                <p className="text-sm bg-white/50 py-3 px-2">{user.email}</p>
                                <p className="text-[25px] border-b-gray-500 border-b pb-2">Plans(Current Plan Premium)</p>
                                <p className="text-sm">08/30/2025</p>
                            </div>
                            <div className="px-2 py-2 space-y-5">
                                <div className="flex items-center justify-between">
                                    <div clas="flex flex-col gap-0">
                                        <p>Netflix Premium</p>
                                        <span className="text-[12px]">4kHD</span>
                                    </div>
                                    <button className="font-semibold px-10 py-1 bg-red-600 hover:bg-red-700 cursor-pointer">
                                        Subscribe</button>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col gap-0">
                                        <p>Netflix Standard</p>
                                        <span className="text-[12px]">720p</span>
                                    </div>
                                    <button className="font-semibold px-10 py-1 bg-red-600 hover:bg-red-700 cursor-pointer">
                                        Subscribe</button>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col gap-0">
                                        <p>Netflix Basic</p>
                                        <span className="text-[12px]">480p</span>
                                    </div>
                                    <button className="font-semibold px-15 py-1 bg-gray-400 cursor-pointer">
                                        Subscribe
                                    </button>
                                </div>
                                <button onClick={() => Logout()}
                                    className="bg-red-600 hover:bg-red-700 rounded font-semibold
                                    w-full text-white px-10 py-2 cursor-pointer">Sign Out</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
