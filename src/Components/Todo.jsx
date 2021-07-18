import React from 'react'
import Todo_item from "./Todos_item";

function Todo(props) {
    return (
        <div className = "container">
            <h2 className="my-3 text-center">Todo List</h2>
            {/* <Addtodos/> */}
            {props.todo.length === 0 ?
                <div className="card">
                    <div className="card-body">
                        There is <strong> No </strong> Todos to display.
                    </div>
                </div>
                : props.todo.map((i) => {
                    return <Todo_item length = {props.todo.length} todo = {props.todo} todoitem={i} key={i.sno} onDelete={props.onDelete} active={props.active}/>
                })}
        </div>
    )
}

export default Todo
