import { useState } from "react";
import Task from "./Task.jsx";
function Home(){
      
      const [input, setInput]=useState("");
      const [tasks , setTasks]=useState([]);
     function submit(e){
      e.preventDefault();
      if(input==="") return;
      setTasks(prev=>[{title:input},...prev]);
      setInput("");
    }
return(
  <>
  <form onSubmit={submit}>
    <input type="text" placeholder="Enter Task" value={input} onChange={(e)=>setInput(e.target.value)}/>
      <button type="submit">submit</button>
  </form>
  <Task data={tasks}/>
  </>
)}
export default Home;

