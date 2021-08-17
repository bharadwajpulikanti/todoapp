import React, { Component } from 'react'

import './Todo.css'
import TodoList from './TodoList'

class TodoApp extends Component {

    constructor(props) {
        super(props)
        this.state = {
            list: [],
            currentItem: {
                item: '',
                key: ''
            }
        }

        this.deleteItem = this.deleteItem.bind(this)
        this.editItem = this.editItem.bind(this)

    }

    handleChangeEvent = (event) => {
        this.setState({
            currentItem: {
                item: event.target.value,
                key: Date.now()
            }
        })
    }

    addItem = (event) => {

        event.preventDefault()

        const tempList = this.state.list
        const currentItem = this.state.currentItem
        const todoList = [currentItem, ...tempList]
        this.setState({
            list: todoList,
            currentItem: {
                item: '',
                key: ''
            }
        })
    }

    deleteItem(key) {
        const listItems = this.state.list
        const filteredItems = listItems.filter(item => item.key != key)

        this.setState({
            list: filteredItems
        })
    }

    editItem(event, key) {
        const listItems = this.state.list
        const editItemslist = listItems.map(item => {
            if (item.key === key) {
                item.item = event.target.value
            }

            return item
        })

        this.setState({
            list: editItemslist
        })
    }

    render() {
        return (
            <div className="TodoApp">
                <h2 >TODO APP</h2>
                <div>
                    <header>
                        <form id="todo-form-id" onSubmit={this.addItem}>
                            <input type="text" placeholder="Enter Text" value={this.state.currentItem.item} onChange={this.handleChangeEvent}></input>
                            <button type="submit">Add</button>
                        </form>
                    </header>

                    <div>
                        <TodoList todolist={this.state.list} deleteItem={this.deleteItem} editItem={this.editItem} />
                    </div>

                </div>
            </div>
        )
    }
}

export default TodoApp

