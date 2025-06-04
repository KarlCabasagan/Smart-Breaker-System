import { Link } from "react-router-dom"
import HomeIcon from "../components/HomeIcon"
import PowerIcon from "../components/PowerIcon"
import RemoteIcon from "../components/RemoteIcon"
import ProfileIcon from "../components/ProfileIcon"
import { Switch } from "../components/ui/switch"

function Control() {
    return(
        <>
            <div className="h-[15%] w-full flex justify-center items-center">
                <div className="h-3/5 w-full flex items-center gap-8 p-5 overflow-x-auto overflow-y-hidden scrollbar-hide">
                    <button>
                        <span className="text-2xl tracking-wider text-gray-600 truncate">
                            Living Room
                        </span>
                    </button>
                    <button>
                        <span className="text-2xl tracking-wider text-gray-600 truncate ">
                            Kitchen
                        </span>
                    </button>
                    <button>
                        <span className="text-2xl tracking-wider text-gray-600 truncate">
                            Bed Room 1
                        </span>
                    </button>
                    <button>
                        <span className="text-2xl tracking-wider text-gray-600 truncate">
                            Bed Room 2
                        </span>
                    </button>
                    <button>
                        <span className="text-2xl tracking-wider text-gray-600 truncate">
                            Comfort Room
                        </span>
                    </button>
                </div>
            </div>
            <div className="h-3/4 w-full flex justify-center">
                <div className="w-11/12 flex flex-wrap justify-between items-stretch content-start gap-y-2 overflow-auto">
                    <div className="h-52 w-[49%] border-2 rounded-2xl" style={{ background: "radial-gradient(circle, rgba(0, 123, 255, 0.3) 0%, transparent 50%)" }} >
                        <div className="h-[30%] w-full flex justify-center">
                            <div className="h-3/5 w-11/12 flex justify-between items-center">
                                <span className="text-lg">OFF</span>
                                <Switch />
                            </div>
                        </div>
                        <div className="h-[70%] w-full flex justify-center">
                            <div className="w-11/12 flex justify-start items-center flex-col mt-[-20px] gap-2">
                                <img src="./appliances/bulb.png" alt="" />
                                <span className="text-xl tracking-wider">Light</span>
                            </div>
                        </div>
                    </div>
                    <div className="h-52 w-[49%] border-2 rounded-2xl" style={{ background: "radial-gradient(circle, rgba(0, 123, 255, 0.3) 0%, transparent 50%)" }} >
                        <div className="h-[30%] w-full flex justify-center">
                            <div className="h-3/5 w-11/12 flex justify-between items-center">
                                <span className="text-lg">OFF</span>
                                <Switch />
                            </div>
                        </div>
                        <div className="h-[70%] w-full flex justify-center">
                            <div className="w-11/12 flex justify-start items-center flex-col mt-[-20px] gap-2">
                                <img src="./appliances/fan.png" alt="" />
                                <span className="text-xl tracking-wider">Electric Fan</span>
                            </div>
                        </div>
                    </div>
                    <div className="h-52 w-[49%] border-2 rounded-2xl" style={{ background: "radial-gradient(circle, rgba(0, 123, 255, 0.3) 0%, transparent 50%)" }} >
                        <div className="h-[30%] w-full flex justify-center">
                            <div className="h-3/5 w-11/12 flex justify-between items-center">
                                <span className="text-lg">OFF</span>
                                <Switch />
                            </div>
                        </div>
                        <div className="h-[70%] w-full flex justify-center">
                            <div className="w-11/12 flex justify-start items-center flex-col mt-[-20px] gap-2">
                                <img src="./appliances/tv.png" alt="" />
                                <span className="text-xl tracking-wider">Smart TV</span>
                            </div>
                        </div>
                    </div>
                    <div className="h-52 w-[49%] border-2 rounded-2xl" style={{ background: "radial-gradient(circle, rgba(0, 123, 255, 0.3) 0%, transparent 50%)" }} >
                        <div className="h-[30%] w-full flex justify-center">
                            <div className="h-3/5 w-11/12 flex justify-between items-center">
                                <span className="text-lg">OFF</span>
                                <Switch />
                            </div>
                        </div>
                        <div className="h-[70%] w-full flex justify-center">
                            <div className="w-11/12 flex justify-start items-center flex-col mt-[-20px] gap-2">
                                <img src="./appliances/pc.png" alt="" />
                                <span className="text-xl tracking-wider">Computer</span>
                            </div>
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
                    <button className="bg-primary p-4 rounded-full mb-3">
                        <img src="./nav_icons/plus.svg" alt="" />
                    </button>
                    <button>
                        <RemoteIcon page="true"/>
                    </button>
                    <Link to={"/profile"}>
                        <button>
                            <ProfileIcon/>
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Control