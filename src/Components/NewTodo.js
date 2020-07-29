import {Button, TextField} from '@material-ui/core'
import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
//const { uuid } = require('uuidv4');

export default function NewTodo({addTodo}) {
    const[todo, setTodo] = useState({
        id:'',
        task:'',
        completed: false,
    })

    function handleNewTodoChange(e){
        setTodo({
            ...todo,
            task: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        if(todo.task.trim()){
            addTodo({
                ...todo,
                id: uuidv4()
            })
            setTodo({
                ...todo,
                task: ''
            })
        }
    }

    const inputStyles = {
        marginTop: '20px',
        color:'white'
    }


    return (
        <div style={inputStyles}>
            <form className='todo-form' onSubmit = {handleSubmit}>
                <TextField
                    label='Task'
                    name='task'
                    type='text'
                    placeholder='Add new item'
                    value={todo.task}
                    onChange={handleNewTodoChange}
                />
                <Button type='submit'>ADD</Button>
            </form>
        </div>
    )
}
