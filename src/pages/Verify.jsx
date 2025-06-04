import { Link } from "react-router-dom"


function Verify() {
    return(
        <>
            <div className="h-full w-full flex justify-center items-center">
                <div className="h-3/5 w-11/12 flex flex-col justify-center items-center gap-8">
                    <div className="w-full flex justify-center items-center">
                        <img src="verify.png" className="size-56" alt="" />
                    </div>
                    <div className="w-full flex flex-col items-center gap-1">
                        <span className="text-4xl font-bold tracking-wider">Verified</span>
                        <span className="text-lg font-thin">Your email has been verified</span>
                    </div>
                    <Link className="w-full" to={'/home'}>
                        <button className="w-full p-3 bg-primary rounded-lg text-white text-2xl font-extralight">Continue</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Verify