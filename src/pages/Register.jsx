import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { supabase } from "../SupabaseClient"
import { UserContext } from "../App"


function Register() {
    const [user, setUser] = useContext(UserContext)

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState(null)
    const [registered, setRegistered] = useState(false)
    const navigate = useNavigate()

    const handleRegister = async (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            setError('password does not match')
            return
        }

        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data : {
                    display_name: fullName
                },
                emailRedirectTo: 'http://smartbreaker.netlify.app/verify',
            }
        })
        if (error) setError(error.message)
        else {
            setError(null)
            setRegistered(true)
            setUser([0, email, fullName])
        }
        // else navigate('/login')
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
                <form onSubmit={handleRegister} className="w-10/12">
                    <input type="text" name="fullname" placeholder="Full Name" className="w-full p-4 bg-white shadow rounded-lg" onChange={e => setFullName(e.target.value)} required />
                    <input type="email" name="email" placeholder="Email" className="w-full p-4 bg-white shadow rounded-lg mt-4" onChange={e => setEmail(e.target.value)} required />
                    <input type="password" name="password" placeholder="Password" className="w-full p-4 bg-white shadow rounded-lg mt-4" onChange={e => setPassword(e.target.value)} required />
                    <input type="password" name="confirm_password" placeholder="Confirm Password" className="w-full p-4 bg-white shadow rounded-lg mt-4"onChange={e => setConfirmPassword(e.target.value)} required />
                    <div>
                        {error && <span className="flex text-red-600 mt-2">{error}</span>}
                        {registered && <span className="flex justify-center text-primary mt-2">Check your email for the confirmation link</span>}
                    </div>
                    <button className='w-full p-3 mt-10 bg-primary text-white text-2xl font-light rounded-lg border-2'>Register</button>
                </form>
            </div>
            <div className="w-full flex justify-center mt-22">
                <span>Don't have an account? <Link to={"/login"}><span className="text-primary">Login</span></Link></span>
            </div>
        </>
    )
}

export default Register