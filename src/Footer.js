import { useContext } from "react"
import { TodoContext } from "./todo-context-provider"

export default function Footer(){
    const todoContext=useContext(TodoContext)
   
    
  


    return <div style={{color:`${todoContext.themeColor}`}}>
        burası footer tema rengi:{todoContext.themeColor}  
    
  
   




    </div>





}