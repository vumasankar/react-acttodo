function TodoItem(props){
    const activityarr = props.activityarr
    const setactivityarr= props.setactivityarr
    function handledelete(removeid){
    var temparr = activityarr.filter(function(item){
        if(item.id === removeid){
            return false
        }
        else{
            return true
        }
    })
    setactivityarr(temparr)
    }
    return(<div className="flex justify-between">
    <p>{props.index+1}.{props.item.activity}</p>
    <button className="text-red-600" onClick={()=>(handledelete(props.item.id))}>Delete</button>
    </div>)
}
export default TodoItem