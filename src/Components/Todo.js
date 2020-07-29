import { Checkbox, IconButton, ListItem, Typography } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import React from 'react'

export default function Todo({ todo, toggleComplete, removeTodo }) {

    const styleCompleted = {
        color: 'white',
        textDecoration: todo.completed ? 'line-through' : null,
        opacity: todo.completed ? .5 : 1,
    }

    function handleCheckboxClick() {
        toggleComplete(todo.id)
    }

    function handleRemoveClick() {
        removeTodo(todo.id)
    }

    return (
        <div style={{display:'flex'}}>
            <ListItem onClick={handleCheckboxClick} >
                <Checkbox
                    checked={todo.completed}
                    type='checkbox'
                    onClick={handleCheckboxClick}
                />
                <Typography
                    variant='body1'
                    style={styleCompleted}
                >
                    {todo.task}
                </Typography>
            </ListItem>
            
            <IconButton onClick={handleRemoveClick}>
                <CloseIcon />
            </IconButton>
        </div>
    )
}

// const styleExitBtn = {
//     position: "absolute",
//     right: '6em',
//     borderRadius: "50%",
// }