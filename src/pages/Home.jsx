import { Link } from "react-router-dom"
import HomeIcon from "../components/HomeIcon"
import PowerIcon from "../components/PowerIcon"
import RemoteIcon from "../components/RemoteIcon"
import ProfileIcon from "../components/ProfileIcon"

function Home() {
    return(
        <>
            <div className="w-full h-[20%] flex items-center justify-center">
                <div className="w-11/12 h-full flex justify-between">
                    <div className="h-full flex items-center">
                        <img src="./logo-letter.png" className="size-50" alt="logo" />
                    </div>
                    <div className="h-full flex justify-center items-center">
                        <img src="./nav_icons/profile.svg" className="size-14 mb-3 mr-2" alt="profile" />
                    </div>
                </div>
            </div>
            <div className="h-[70%] w-full flex justify-center">
                <div className="h-11/12 w-11/12 flex flex-col justify-between">
                    <div className="h-1/2 w-full bg-white rounded-2xl">
                        <div className="h-4/12 w-full flex flex-col justify-evenly items-center">
                            <div className="w-11/12">
                                <span className="text-xl font-medium">Real-Time Monitoring</span>
                            </div>
                            <div className="w-11/12 flex flex-col ">
                                <span className="font-light">Live tracking of energy usage</span>
                                <span className="font-light">per room/device</span>
                            </div>
                        </div>
                        <div className="h-8/12 w-full flex justify-center">
                            <div className="w-11/12 flex justify-between">
                                <div className="h-full w-8/12">
                                    <img src="./graph.png" className="object-contain h-full" alt="" />
                                </div>
                                <div className="h-10/12 w-3/12 flex flex-col justify-around items-center">
                                    <div className="h-full w-11/12 flex flex-col">
                                        <span className="text-sm font-light mb-[-4px]">Voltage</span>
                                        <span className=" font-semibold">230 V</span>
                                    </div>
                                    <div className="h-full w-11/12 flex flex-col">
                                        <span className="text-sm font-light mb-[-4px]">Current</span>
                                        <span className=" font-semibold">4.3 A</span>
                                    </div>
                                    <div className="h-full w-11/12 flex flex-col">
                                        <span className="text-sm font-light mb-[-4px]">Power Factor</span>
                                        <span className=" font-semibold">0,95</span>
                                    </div>
                                    <div className="h-full w-11/12 flex flex-col">
                                        <span className="text-sm font-light mb-[-4px]">Total Bill</span>
                                        <span className=" font-semibold">₱ 1,566</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[45%] w-full bg-white rounded-2xl flex justify-center items-center">
                        <div className="h-11/12 w-11/12 flex justify-between items-center">
                            <div className="h-full w-7/12">
                                <div className="h-full w-full flex justify-center items-center">
                                    <img src="./PieLayer.png" className="object-contain w-10/12" alt="" />
                                </div>
                            </div>
                            <div className="h-full w-5/12 flex justify-center items-center">
                                <div className="w-full flex flex-col justify-evenly">
                                    <div className="flex justify-evenly items-center">
                                        <div className="h-1.5 w-1.5 rounded-full bg-[#8979FF] mt-0.5"></div>
                                        <span className="w-9/12 font-light">Living Room</span>
                                    </div>
                                    <div className="flex justify-evenly items-center">
                                        <div className="h-1.5 w-1.5 rounded-full bg-[#FF928A] mt-0.5"></div>
                                        <span className="w-9/12 font-light">Kitchen</span>
                                    </div>
                                    <div className="flex justify-evenly items-center">
                                        <div className="h-1.5 w-1.5 rounded-full bg-[#3CC3DF] mt-0.5"></div>
                                        <span className="w-9/12 font-light">Bed Room 1</span>
                                    </div>
                                    <div className="flex justify-evenly items-center">
                                        <div className="h-1.5 w-1.5 rounded-full bg-[#FFAE4C] mt-0.5"></div>
                                        <span className="w-9/12 font-light">Bed Room 2</span>
                                    </div>
                                    <div className="flex justify-evenly items-center">
                                        <div className="h-1.5 w-1.5 rounded-full bg-[#537FF1] mt-0.5"></div>
                                        <span className="w-9/12 font-light">Comfort Room</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white h-[10%] w-full absolute bottom-0 flex justify-center items-center">
                <div className="w-11/12 flex items-center justify-around overflow-x-auto overflow-y-hidden">
                    <button>
                        <HomeIcon page="true"/>
                    </button>
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

export default Home