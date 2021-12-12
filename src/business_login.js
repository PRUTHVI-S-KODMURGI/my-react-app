import React, {useState} from "react"
import "./index.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Login = ({ setLoginUser}) => {

    const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
         axios.post("http://localhost:9002/login.js", user)
         .then(
        res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/data.js")
        })
    }

    return (
        // // <div className="login">
        // //     <h1>Login</h1>
        // //     <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
        // //     <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
        // //     <div className="button" onClick={login}>Login</div>
        // //     <div>or</div>
        //     {/* <div className="button" onClick={() => history.push("/register")}>Register</div> */}
        // // </div>
        <section className="flex items-center justify-center min-h-screen bg-gray-100" >
                   <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg"> 
                   <h3 className="text-2xl font-bold text-center">Login to your account</h3>
                   <div className="w-full max-w-lg p-16">
                       <div className="mt-4">
                           <div>
                               <label className="block" for="email">Email</label>
                                       <input type="text" placeholder="Email" name="email" value={user.email} onChange={handleChange} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"></input>
                           </div>
                           <div className="mt-4">
                               <label className="block">Password</label>
                                      <input type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"></input>
                           </div>
                           <div className="flex items-baseline justify-between">
                                <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900" onClick={login}>Login</button>
                           </div>
                       </div>
                   </div>
                   </div> 
           </section>
    )
}

export default Login