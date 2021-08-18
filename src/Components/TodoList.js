import React from 'react'
import "./TodoList.css"

function TodoList(props) {

    const items = props.todolist
    console.log(items)
    const itemList = items.map(item => {
        return <div className="TodoList" key={item.key}><p><input type="text" id={item.key} value={item.item} onChange={(event) => props.editItem(event, item.key)}></input><span><button onClick={(event) => props.deleteItem(item.key)}>X</button></span></p></div>
    })


    return (
        <div>
            {itemList}
        </div>
    )
}

export default TodoList
