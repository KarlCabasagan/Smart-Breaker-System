import { Link, useNavigate } from "react-router-dom"
import HomeIcon from "../components/HomeIcon"
import PowerIcon from "../components/PowerIcon"
import RemoteIcon from "../components/RemoteIcon"
import ProfileIcon from "../components/ProfileIcon"
import { supabase } from "../SupabaseClient"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../App"

function Profile() {
    const [user, setUser] = useState({})

    const navigate = useNavigate()

    const handeLogout = async (e) => {
        await supabase.auth.signOut()
        navigate('/login')
    }

    useEffect(() => {
        const fetchUserData = async () => {
            const { data: { session } } = await supabase.auth.getSession()
            setUser({id: session.user.id, email: session.user.email, fullname: session.user.user_metadata.display_name, avatar: session.user.user_metadata.avatar_url})
        }
        fetchUserData()
    }, [])

    return(
        <>
            <div className="h-[35%] w-full flex flex-col justify-center items-center gap-2 mt-15">
                <div className="rounded-full border-4 border-primary shadow-lg relative mt-2">
                    <img src={user && user.avatar ? user.avatar : "./nav_icons/profile.svg"} className="size-44 rounded-full" alt="" />
                    <div className="bg-white p-2 absolute bottom-5 right-0 z-10 flex justify-center items-center rounded-full shadow-lg">
                        <img src="./icons/pen.svg" className="size-3" alt="" />
                    </div>
                </div>
                <div className="w-11/12 flex flex-col justify-evenly items-center">
                    <span className="text-2xl font-semibold">{user && user.fullname}</span>
                    <span className="font-light text-sm tracking-wider">{user && user.email}</span>
                </div>
            </div>
            <div className="h-[55%] w-full flex justify-center items-start">
                <div className="w-10/12 flex flex-col justify-evenly mt-20 gap-8">
                    <div className="w-full flex">
                        <div className="h-auto grow flex gap-4">
                            <div className="flex items-center">
                                <img src="./icons/profile.svg" alt="" />
                            </div>
                            <div className="grow flex items-center">
                                <span className="text-xl">My Account</span>
                            </div>
                        </div>
                        <div className="flex justify-center items-center mt-2">
                            <img src="./icons/arrow.svg" className="size-4" alt="" />
                        </div>
                    </div>
                    <div className="w-full flex">
                        <div className="h-auto grow flex gap-4">
                            <div className="flex items-center ml-0.5">
                                <img src="./icons/notification.svg" alt="" />
                            </div>
                            <div className="grow flex items-center">
                                <span className="text-xl">Notifications</span>
                            </div>
                        </div>
                        <div className="flex justify-center items-center mt-2">
                            <img src="./icons/arrow.svg" className="size-4" alt="" />
                        </div>
                    </div>
                    <div className="w-full flex">
                        <div className="h-auto grow flex gap-4">
                            <div className="flex items-center">
                                <img src="./icons/airplane.svg" alt="" />
                            </div>
                            <div className="grow flex items-center">
                                <span className="text-xl">Send Feedback</span>
                            </div>
                        </div>
                        <div className="flex justify-center items-center mt-2">
                            <img src="./icons/arrow.svg" className="size-4" alt="" />
                        </div>
                    </div>
                    <div className="w-full flex">
                        <div className="h-auto grow flex gap-4">
                            <div className="flex items-center">
                                <img src="./icons/report.svg" alt="" />
                            </div>
                            <div className="grow flex items-center">
                                <span className="text-xl">Report a Bug</span>
                            </div>
                        </div>
                        <div className="flex justify-center items-center mt-2">
                            <img src="./icons/arrow.svg" className="size-4" alt="" />
                        </div>
                    </div>
                    <div className="w-full flex" onClick={handeLogout}>
                        <div className="h-auto grow flex gap-4">
                            <div className="flex items-center">
                                <img src="./icons/logout.svg" alt="" />
                            </div>
                            <div className="grow flex items-center">
                                <span className="text-xl">Logout</span>
                            </div>
                        </div>
                        <div className="flex justify-center items-center mt-2">
                            <img src="./icons/arrow.svg" className="size-4" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white h-[10%] w-full absolute bottom-0 flex justify-center items-center">
                <div className="h-7/12 w-11/12 flex items-center justify-around">
                    <Link to={"/home"}>
                        <button>
                            <HomeIcon/>
                        </button>
                    </Link>
                    <Link to={"/power"}>
                        <button>
                            <PowerIcon/>
                        </button>
                    </Link>
                    <Link to={"/control"}>
                        <button className="bg-primary p-4 rounded-full mb-3">
                            <img src="./nav_icons/plus.svg" alt="" />
                        </button>
                    </Link>
                    <Link to={"/control"}>
                        <button>
                            <RemoteIcon/>
                        </button>
                    </Link>
                    <button>
                        <ProfileIcon page="true"/>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Profile