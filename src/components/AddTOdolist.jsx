import { useState } from "react"

function AddtodoForm(props){
    const activityarr = props.activityarr
  const setactivityarr = props.setactivityarr
 
  const[newactivity, setnewactivity] = useState("")
  function handleAdd(event){
    setnewactivity(event.target.value)
 }
 function Addactivity(){
    setactivityarr([...activityarr,{id:activityarr.length+1,activity:newactivity}])
    setnewactivity("")
 }

    return(<div className="flex flex-col gap-3">
    <h1 className="text-2xl font-medium ">Manage activities</h1>
    <div>
    <input value={newactivity} onChange={handleAdd} type="text" className="border border-black p-1" placeholder="Need acitivity"></input>
    <button onClick={Addactivity} className="bg-black text-white p-1 border border-black">Add</button></div>
    </div>)
}
export default AddtodoForm