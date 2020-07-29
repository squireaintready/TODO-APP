import {List} from '@material-ui/core'
import React from 'react'
import Todo from './Todo'


export default function TodoList({todos, toggleComplete, removeTodo}) {
    return (
            <List>
                {todos.map(todo =>(
                    <Todo 
                        key={todo.id} 
                        todo={todo} 
                        toggleComplete={toggleComplete}
                        removeTodo = {removeTodo}
                    />
                ))}
            </List>
    )
}



// export default class TodoList extends Component {
//     constructor() {
//         super();
//         this.state = {
//             isChecked:false,
//             todos: []
//         }
//     }

//     handleChange = () =>{
//         let isCheckedHelper = !this.state.isChecked
//         this.setState({
//             isChecked: isCheckedHelper
//         })
//     }

//     addItem = (event) =>{
//         this.setState({
//             todos : event.target.value 
//         })
//     }

//     render() {
//         const styleTodoList = {
//             display: 'inline-block'
//         }



//         return (
//             <div>
//                 <input
//                     type='checkbox'
//                     checked={this.state.isChecked}
//                     onChange={this.handleChange}
//                     style={styleTodoList}
//                 />
//                 <p style={styleTodoList}>Item One</p>
//             </div>
//         )
//     }


// }
