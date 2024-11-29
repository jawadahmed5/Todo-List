import React from "react";
import { useState } from "react";
import { Icon } from "@iconify/react";


export const TodoList = () => {

    const [inputlist, setInputList] = useState("");
    
    const [listItem, setListItem] = useState([]);
    const formHandler = (event) => {
        event.preventDefault();


        setListItem((pre) => [...pre, inputlist]);

        setInputList("")
    }

const deleteHandler = (task) => {
    const deleteList = listItem.filter ((list) => list !== task);
    
    setListItem(deleteList)
    
}

    return <>
    

        <div className="d-flex justify-content-center align-items-center w-100 text-bg-warning " style={{ height: "100vh" }} >


            <div className="bg-dark px-5 pb-5 pt-2 rounded-4 text-white">

<h1 className="text-center text-primary">To Do List</h1>


                <form onSubmit={formHandler}>

                    <input className="py-1 rounded-3 border-0 p-3 py-2 px-3 mt-3 " type="text"
                        placeholder="Make Your List Here"
                        value={inputlist}
                        onChange={(e) => {
                            setInputList(e.target.value);




                            
                            




                

                        }}

                        

                        
                    />

                    
 <button className="bg-dark border-0 fs-3 ms-1">
                               <Icon className='fs-1 fw-bolder text-danger ms-2 bg-dark' icon="gridicons:add-outline" />                
                               </button>                      
                </form>

                


                <div className="mt-3">

                    {listItem.map((task) => {
                        return (
                            <>
                            <div className="d-flex justify-content-between w-100 text-center  ">
                                <h5 className="text-center">{task}</h5>

                                <button onClick={() => deleteHandler(task) } className="btn btn-danger my-2 py-0">Delete</button>
                                </div>
                            </>
                        );
                    })}


                </div>

            </div>

        </div>

    </>
}

