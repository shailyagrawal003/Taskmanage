import { useState } from "react";
import Task from "./Task.jsx";
function Home(){
      const [gets , setGets]=useState([]);
      const [take, setTake]=useState("");
     function submit(e){
      e.preventDefault();
      if(take==="") return;
      setGets(prev=>[{title:take},...prev]);
      setTake("");
    }
return(
  <>
  <form onSubmit={submit}>
    <input type="text" placeholder="Enter Task" value={take} onChange={(e)=>setTake(e.target.value)}/>
      <button type="submit">submit</button>
  </form>
  <Task data={gets}/>
  </>
)}
export default Home;

