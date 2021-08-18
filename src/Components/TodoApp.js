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

    // handleChangeEvent = (event) => {
    //     this.setState({
    //         currentItem: {
    //             item: event.target.value,
    //             key: Date.now()
    //         }
    //     })
    // }

    addItem = (event) => {



        event.preventDefault()
        const textelement = document.getElementById("textId").value

        if (textelement !== null && textelement.trim() !== "") {
            const tempList = this.state.list

            const currentItem = {
                item: textelement,
                key: Date.now()
            }
            const todoList = [currentItem, ...tempList]
            this.setState({
                list: todoList,
                currentItem: {
                    item: '',
                    key: ''
                }
            })
            document.getElementById("textId").value = ""

        }
        else {
            alert("Please enter input text value ... it can't be empty or have blank spaces")
        }
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
                            <input id="textId" type="text" placeholder="Enter Text" ></input>
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

