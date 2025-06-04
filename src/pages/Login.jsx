import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { supabase } from "../SupabaseClient"
import { UserContext } from "../App"


function Login() {
    const [user, setUser] = useContext(UserContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        const { error } = await supabase.auth.signInWithPassword({email, password})
        if (error) setError(error.message)
        else {
            const { data: { session } } = await supabase.auth.getSession()
            setUser([session.user.id, session.user.email, session.user.user_metadata.display_name,])

            navigate('/home')
        }
    }

    return(
        <>
            <div className="h-2/6 w-full flex flex-col-reverse items-center relative">
                <img className="w-3/5" src="logo-full.png" alt="logo.png" />
                <div className="w-10/12 flex justify-start absolute bottom-0">
                    <span className="text-lg">Login to your Account</span>
                </div>
            </div>
            <div className="w-full flex flex-col items-center mt-6">
                <form className="w-10/12" onSubmit={handleLogin}>
                    <input type="email" name="email" placeholder="Email" className="w-full p-4 bg-white shadow rounded-lg" onChange={e => setEmail(e.target.value)} required />
                    <input type="password" name="password" placeholder="Password" className="w-full p-4 bg-white shadow rounded-lg mt-4" onChange={e => setPassword(e.target.value)} required />
                    <div className={(error ? "justify-between" : "flex-row-reverse") + " w-full flex"}>
                        {error && <span className="text-red-600 mt-2">{error}</span>}
                        <span className="text-primary mt-2">Forgot Password?</span>
                    </div>
                    <button className='w-full p-3 mt-3 bg-primary text-white text-2xl font-light rounded-lg border-2'>Login</button>
                </form>
            </div>
            <div className="w-full flex flex-col items-center mt-16">
                <div className="w-9/12 flex justify-center">
                    <span className="text-gray-700">- or login with -</span>
                </div>
                <div className="w-9/12 flex justify-evenly mt-4">
                    <div className="bg-white w-3/12 p-3 flex justify-center items-center shadow rounded-lg">
                        <img src="/icons/google.png" alt="" />
                    </div>
                    <div className="bg-white w-3/12 p-3 flex justify-center items-center shadow rounded-lg">
                        <img src="/icons/facebook.png" alt="" />
                    </div>
                    <div className="bg-white w-3/12 p-3 flex justify-center items-center shadow rounded-lg">
                        <img src="/icons/twitter.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center mt-22">
                <span>Don't have an account? <Link to={"/register"}><span className="text-primary">Sign up</span></Link></span>
            </div>
        </>
    )
}

export default Login