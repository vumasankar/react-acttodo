
import TodoItem from "./TodoItem"

function TodoList(props){
    const activityarr = props.activityarr
  const setactivityarr = props.setactivityarr
    return( <div className="bg-[#BDB4EA] border rounded-md p-4 flex-grow" >
    <h1 className="text-3xl font-medium">Today's Activity</h1>
    {activityarr.length ===0 ? <p>You haven't added anything</p> : ""}
    {
        activityarr.map(function(items,index){
            return <TodoItem item={items} index={index}   activityarr={activityarr} setactivityarr={setactivityarr}/>
        })
    }
  
     </div>)
}
export default TodoList