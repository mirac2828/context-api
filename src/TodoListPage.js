import { object } from "prop-types"
import { useContext, useRef,useState } from "react"
import { TodoContext } from "./todo-context-provider"
import validator from "validator"
import { toast,ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
export default  function TodoListPage(){
    const todoContext=useContext(TodoContext)
    const inputRef=useRef()
    
    const isDoneRef=useRef()
    const [inputValueRef,setInputValueRef]=useState()
    const deleteItem =(id)=>{
    
      let filteredTodos=todoContext.todos.filter(element => element.id!==id );
      todoContext.setTodos(filteredTodos)



      
    }
    

   
    
   
        
    const handle=()=> {
    let findedTodos= todoContext.todos.find(item=>item.name===inputRef.current.value)
if(findedTodos){alert("Bu mail daha önce alınmıştır")
 return}
      if(  validator.isEmail(inputRef.current.value )  )

      {
        
        
        
        let newId=  todoContext.todos.length>0 ? todoContext?.todos[todoContext.todos.length -1].id+1 :3
      const newItem={name:inputRef.current.value,
                     isdone:isDoneRef.current.checked ,
                     id:newId}
     
        const newTodos=[...todoContext.todos]
        newTodos.push(newItem)
        todoContext.setTodos(newTodos)
        
  
      toast.success('İşleminiz başarılı', {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        }) 
    }
    else
    
     { toast.warning('İşleminiz gerçekleşmedi.Lütfen geçerli bir email adresi giriniz', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })  }
       




      


      
  } 
                 
      ;





    



return ( <div className="w-100 "> 
    <div className="form-group my-3">
      <label htmlFor="exampleInputEmail1">Todo Email</label>
      <input value={inputValueRef} ref= {inputRef}  className="form-control mt-3" id="exampleInputEmail1" aria-describedby="emailHelp" />
      
    </div>
    
    <div className="form-check">
      <input ref={isDoneRef} type="checkbox" className="form-check-input " id="exampleCheck1"/>
      <label className="form-check-label " htmlFor="exampleCheck1">isDone</label>
    </div>
     <button onClick={handle}
         className="btn btn-primary my-3">Add New Item</button>
         


<ToastContainer
  position="top-left"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="light"
  />
  
           
         
    

    <table className="table table-striped   ">
  <thead className="">


    <tr className=" ">
      <th scope="col">Index</th>
      <th scope="col">Name</th>
      <th scope="col">isDone</th>
      <th scope="col">id</th>
    </tr>
    </thead>

  <tbody className=" mx-5">
    {todoContext.todos.map((todos,index)=>

    
    <tr key={index}  className="" >
      <th   scope="row">{index+1} </th>
      <td> {todos.name} </td>
      <td> {todos.isdone ?  "true": "false"} </td>
      <td> {todos.id} </td>
      <button  onClick={ ()=> deleteItem (todos.id)}
         className="btn btn-danger btn-sm">Delete Item</button>
    </tr>
    
)}
    
  </tbody>
</table>
    
    
    
</div>
    )
}
