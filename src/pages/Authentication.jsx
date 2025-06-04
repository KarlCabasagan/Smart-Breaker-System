import { Link } from 'react-router-dom'

function Authentication() {
    return(
        <>
            <div className="h-1/2 w-full flex flex-col-reverse items-center">
                <div className="w-full flex flex-col relative">
                    <img src="logo-full.png" alt="logo.png" />
                    <div className="w-full flex justify-center absolute bottom-15">
                        <span className="text-xl font-semibold">MANAGE YOUR HOME ELECTRICITY</span>
                    </div>
                </div>
            </div>
            <div className="h-1/2 w-full flex flex-col items-center">
                <div className="h-1/2 w-4/5 flex flex-col items-center justify-around">
                    <Link className='h-2/5 w-full' to={"/login"}>
                        <button className='h-full w-full bg-primary text-white text-2xl font-semibold rounded-lg'>LOGIN</button>
                    </Link>
                    <Link className='h-2/5 w-full' to={"/register"}>
                        <button className='h-full w-full bg-white text-primary text-2xl font-semibold rounded-lg border-2 border-primary'>SIGN UP</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Authentication