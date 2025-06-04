import { Link } from "react-router-dom"
import HomeIcon from "../components/HomeIcon"
import PowerIcon from "../components/PowerIcon"
import RemoteIcon from "../components/RemoteIcon"
import ProfileIcon from "../components/ProfileIcon"

function Power() {
    return(
        <>
            <div className="h-[90%] w-full flex justify-center items-center">
                <div className=" h-10/12 w-10/12">
                    <div className="h-1/5 w-full flex flex-col-reverse items-end">
                        <button className="bg-primary rounded-full p-3">
                            <img src="./icons/microphone.svg" alt="" />
                        </button>
                    </div>
                    <div className="h-1/2 w-full flex flex-col justify-evenly items-center">
                        <div className="h-[205px] w-[205px] bg-white rounded-full border-8 border-[#B9B8B6] shadow-xl/30 flex justify-center items-center">
                            <div className="h-[113px] w-[113px] bg-[#FAF9F6] rounded-full inset-shadow-sm flex justify-center items-center">
                                <img src="./icons/power.svg" className="w-1/2" alt="" />
                            </div>
                        </div>
                        <div>
                            <span className="text-2xl font-light">Power Off</span>
                        </div>
                    </div>
                    <div className="h-[30%] w-full flex flex-col justify-evenly items-center">
                        <div className="h-1/2 w-full flex justify-evenly">
                            <div className="flex flex-col justify-center items-center">
                                <span className="text-2xl font-semibold">0.00</span>
                                <span className="text-sm font-light">Total Ele(kWh)</span>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <span className="text-2xl font-semibold">0.00</span>
                                <span className="text-sm font-light">Power Factor</span>
                            </div>
                        </div>
                        <div className="h-1/2 w-full flex justify-between">
                            <div className="flex flex-col justify-center items-center">
                                <span className="text-2xl font-semibold">0.0</span>
                                <span className="text-sm font-light">Power(W)</span>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <span className="text-2xl font-semibold">230.9</span>
                                <span className="text-sm font-light">Voltage(V)</span>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <span className="text-2xl font-semibold">230.9</span>
                                <span className="text-sm font-light">Current(A)</span>
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
                    <button>
                        <PowerIcon page="true"/>
                    </button>
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

export default Power