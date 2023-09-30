import { useContext, useState, useEffect } from "react"
import { useNavigate, NavLink } from "react-router-dom"
import walgenContext from "../context/walgenContext"



const Login = () => {
    const navigate = useNavigate()
    const { notify, setuser, user } = useContext(walgenContext)
    const [formData, setformData] = useState({
        email: '',
        password: ''
    })
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`https://encouraging-scarlet.cmd.outerbase.io/login`, {
            'method': 'POST',
            'headers': {
                'content-type': 'application/json'
            },
            'body': JSON.stringify({
                email: formData.email.toString(),
                password: formData.password.toString()
            })
        })

        const data = await response.json()
        console.log(data)
        setformData({
            email: '',
            password: ''
        })
        if (data.success) {
            if(data.response.items.length > 0){
                setuser(data.response.items[0])
                localStorage.setItem('login', true)
                localStorage.setItem('id', data.response.items[0].id)
                notify(false, "Login Successfully !")
                navigate('/dashboard')
            } else{
                notify(true, "Invalid Credentials.Login Again!")
            }
        } else {
            notify(true, "Try Again !")
        }
    }

    const handleChange = (e) => {
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="w-full min-h-[85vh] overflow-hidden grid place-content-center ">
            <form onSubmit={handleSubmit} className="login flex flex-col gap-5 bg-white rounded-2xl p-5 min-w-[350px] shadow-xl">
                <h1 className="text-center text-2xl lg:text-3xl font-semibold">
                    LogIn
                </h1>


                <div className="form-group flex flex-col">
                    <label htmlFor="email " className="block text-semibold text-gray-400">Email</label>
                    <input name="email" type="email" placeholder="" className="block border-b-2 border-black pb-2 focus:outline-none" value={formData.email} onChange={handleChange} />
                </div>

                <div className="form-group flex flex-col">
                    <label htmlFor="password " className="block text-semibold text-gray-400">Password</label>
                    <input disabled name="password" type="password" placeholder="--------Not required--------" className="block border-b-2 border-black pb-2 focus:outline-none cursor-not-allowed " value={formData.password} onChange={handleChange} />
                </div>
                {/* { isSignUp ? <div className="subheading">
            Already have an account? <NavLink to="/" className="text-blue-500">Login</NavLink>
          </div> :  */}
                <div className="subheading">
                    Don't have an account?
                    <NavLink to="/signup" className="text-blue-500"> Signup.</NavLink>
                </div>
                <button type="submit" className="bg-black py-2 text-white font-bold"
                >
                    Log In
                </button>
            </form>
        </div>
    )
}


export default Login;