function Task({data}){
  return(
    <>
     <ul>
        {data.map((items,index) => (
          <li key={index}>{items.title}
          
          </li>
        ))}
      </ul>
    </>
  )
}
export default Task;