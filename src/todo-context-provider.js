import { Children, createContext, useState } from "react"


export const TodoContext=createContext({})


export default function TodoContextProvider(props){

    const [themeColor,setThemeColor]=useState("red")
    const[color,setColor]=useState("black")
    const[todos,setTodos]=useState([
        { name:"kerem",
        isdone:"false",
        id:1},
        { name:"defne",
        isdone:"true",
    id:2}




    ])
    const contextProviderValue ={ 
    themeColor,
    setThemeColor,
    color,
    setColor,
    todos,
    setTodos


}


    return <div> 

        <TodoContext.Provider value={contextProviderValue}>
            {props.children}



        </TodoContext.Provider>



    </div> }