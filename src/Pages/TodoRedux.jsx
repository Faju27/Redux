import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uniqueId } from "uuid";
import { addToList, removeFromlist, updateStatus } from '../Redux/Slices/TodoSlice';
import { MdDelete, MdEdit, MdUpdate } from "react-icons/md";

const TodoRedux = () => {
    const [todo, setTodo] = useState("");
    const {todoList}  = useSelector(states => states.todo)
    const dispatch = useDispatch()

    const handleTodo = () => {
        if (!todo) {
            return toast.error("Please enter input!")
        }
        if (todo.length < 5) {
            return toast.error("please enter minimum 5 charecters.")
        }
        const todoObject = {
            id : uniqueId(),
            task : todo,
            completed : false,
            createdAt : new Date().toLocaleString("en-IN"),
            updatedAt : new Date().toLocaleString("en-IN")
        }
        const exist = todoList.findIndex(item => item.task.toLowerCase() == todo.toLowerCase())
        if (exist > -1) {
            return toast.error("Todo already existed.")
        }
        dispatch(addToList(todoObject))
        setTodo("")
        return toast.success("Todo Added.")
    }
    const handleRemove = (removeId) => {
        dispatch(removeFromlist({id:removeId}))
    }

    const handleStatusUpdate = (updateId) => {
        dispatch(updateStatus({id:updateId}))
    }

    return (
        <div className='bg-dark' style={{height:"100vh"}}>
            <div className='d-flex flex-column gap-3 align-items-center py-4'>
                <input type="text" placeholder='Enter Task' onChange={e => setTodo(e.target.value)} value={todo} className='w-50 bg-body-tertiary border border-2 border-warning  rounded-2 px-5 py-2'/>
                <button onClick={handleTodo} className='w-25 btn btn-outline-success'> Add Todo </button>
            </div>
            <div className='w-100 d-flex justify-content-center flex-column gap-5 align-items-center'>
                {
                    todoList.map((todo) => {
                        return (
                            <div key={todo.id} className='d-flex flex-column bg-light border border-warning border-2 p-3 w-50'>
                                <div>
                                    <p>Task : {todo.task} </p>
                                    <p>Status : {todo.completed ? "Completed" : "Pending"} </p>
                                    <p>Updated : {todo.updatedAt} </p>
                                </div>
                                <div className='d-flex justify-content-between' > 
                                    <button className='btn btn-success py-2' onClick={() => handleStatusUpdate(todo.id)}><MdUpdate />Update</button>                                
                                    <button className='btn btn-primary py-2' onClick={() => handleEdit(todo)}><MdEdit /> Edit </button>
                                    <button className='btn btn-danger py-2' onClick={() => handleRemove(todo.id)}><MdDelete /> Delete</button>

                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default TodoRedux;
