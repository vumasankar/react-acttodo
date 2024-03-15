
import AddtodoForm from "./AddTOdolist"
import TodoList from "./TodoList"
import { useState } from "react"
function Todo(){

    const[activityarr,setactivityarr] = useState([
        {id:1,
        activity:"Gofor a walk"},
        {
            id:2,
            activity:"get up early"
        },
        {id:3,
            activity:"get up early"}
    ])
    return(
    <div>
        <div className="flex gap-5 flex-wrap" >
 <AddtodoForm activityarr={activityarr} setactivityarr={setactivityarr} />
 <TodoList activityarr={activityarr} setactivityarr={setactivityarr}/>
   
    </div>
    </div>)
}
export default Todo