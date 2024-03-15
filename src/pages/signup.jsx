import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Signup(props){
    const navigate = useNavigate()
    const users =props.users
    const setusers = props.setusers

    const[enewuser,setenewuser] = useState()
    const[enewpass,setenewpass] = useState()
    
    function handleuser(event){
     setenewuser(event.target.value)
    }
    function handlePass(event){
     setenewpass(event.target.value)
    }
    function adduser(){
        setusers([...users,{username:enewuser,password:enewpass}]
            )
            navigate("/")
    }
    return(<div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
            <h1 className="text-3xl font-medium">Hey Hi</h1>
            <p>You can Signup here;)</p>
            <div className="flex flex-col gap-2 m-2">
                <input value={enewuser} onChange={handleuser} type="text" placeholder="username" className="w-52 border-black bg-transparent border rounded-md p-1 "></input>
                <input value={enewpass} onChange={handlePass} type="text" placeholder="password" className="w-52 border-black bg-transparent border rounded-md p-1 "></input>
                <input type="text" placeholder="confirm password" className="w-52 border-black bg-transparent border rounded-md p-1 "></input>
                <button className="bg-orange-500 border rounded-md p-1 w-20 h-10" onClick={adduser}> Signup</button>
                <p>Dont have an account? <Link to={"/"} className="underline">Login</Link> </p>
            </div>

        </div>
    </div>)
}
export default Signup