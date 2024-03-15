import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Login(props){
    const navigate = useNavigate()
   const users = props.users
   const[newuser,setnewuser] = useState()
   const[newpass,setnewpass] = useState()
   const[ruser,setruser] = useState(true)
   function handleuser(event){
    setnewuser(event.target.value)
   }
   function handlePass(event){
    setnewpass(event.target.value)
   }

  function checkUser(){
    var userfound = false
    
    users.forEach(function(item){
        if(item.username === newuser && item.password===newpass){
            console.log("succes")
            userfound = true
            navigate("/landing",{state:{user:newuser}})
        }
        if(userfound === false){
            console.log("login failed")
            setruser(false)
        }
    })
  }

    return(<div className="bg-black p-10">
    <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey Hi</h1>
        
        {ruser ? <p className=""> I help you manage your activities after you login ;)</p> : <p className="text-red-500">Please signup</p>} 
        <div className="flex flex-col gap-2 m-2">
            <input type="text" value={newuser} onChange={handleuser} placeholder="username" className="w-52 border-black bg-transparent border rounded-md p-1 "></input>
            <input type="text" value = {newpass} onChange={handlePass} placeholder="password" className="w-52 border-black bg-transparent border rounded-md p-1 "></input>
        
            <button className="bg-violet-500 border rounded-md p-1 w-20 h-10" onClick={checkUser}> Login</button>
            <p>Already have an account? <Link to={"/signup"} className="underline">Singup</Link> </p>
        </div>

    </div>
</div>)
}

export default Login