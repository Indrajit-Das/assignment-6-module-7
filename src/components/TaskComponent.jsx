import { useState,useRef } from 'react';

    
let TaskComponent=()=>{
    let listRefs =useRef([]);
    let [task,setTask]=useState("");
    let [list,setList]=useState([]);
    // setting the text into state
    const updateTask = (event)=>{
        setTask(event.target.value);
    }
    // updating the task array
    const saveTask =()=>{
        if(task!=""){
            list.push(task);
            setList([...list]);
            setTask("");
            console.log(list);
        }else{
            alert("Enter a Data first");
        }
        
    }
    // removing task from the task list
    const removeItem=(i)=>{
        list.splice(i,1);
        setList([...list]);
    }
    // complete task
    const markItem =(index)=>{
        const currentItem = listRefs.current[index];
        currentItem.style.backgroundColor = "yellow";
        currentItem.style.textDecoration = "line-through";
        currentItem.style.textDecorationColor = 'red'; 
        currentItem.style.textDecorationThickness = '2px'; 
    }
   

    return (
        <div className='bg-gray-500 p-5 text-center h-[78vh]'>
            <div className='taskDiv  mt-5'>
                <input className="border-2 border-gray-500 rounded-lg py-2 w-[60%] focus:border-green-800 focus:outline-none text-xl" type="text" value={task} onChange={updateTask}/>
                <br /><button onClick={saveTask} className='mt-5 rounded-lg uppercase bg-green-500 py-2 px-3 w-[20%] text-white text-xl'>Add</button>
            </div>
            <div className='listData'>

                {list.length !==0?(
                    <table className='table-auto border-2 border-white bg-gray-50 w-[60%] mt-5 mx-auto'>
                        <thead className=' h-12'>
                            <tr className='text-center border-2'>
                                <th>Task</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                list.map((item,index)=>{
                                    return(
                                    <tr key={index.toString()} className='border-2'>
                                        <td ref={(el)=>listRefs.current[index]=el} className='border-2'>{item}</td>
                                        <td>
                                            <button onClick={()=>markItem(index)} className='text-center mr-2 px-2 py-1 bg-yellow-300 rounded-lg'>Complete</button>
                                            <button onClick={()=>removeItem(index)} className='text-center mr-2 px-2 py-1 bg-red-300 rounded-lg'>Delete</button>
                                        </td>
                                    </tr>
                                    )
                                })  
                            }
                        </tbody>
                    </table>
                ):<p className='mt-8 text-xl text-white'>No data added</p>}
            </div>
        </div>
    )
}
export default TaskComponent;