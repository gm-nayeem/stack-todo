import React, { Component } from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import shortid from 'shortid'

import ListView from '../listview'
import TableView from '../tableview'
import Controller from '../controllers'
import CreateTodoForm from '../create-todo-form'

export default class Todos extends Component {

  state = {
    todos: [
      {
        id: '101',
        text: 'text1',
        description: 'this is text one',
        time: new Date(),
        isComplete: false,
        isSelect: false
      },
      {
        id: '102',
        text: 'text2',
        description: 'this is text two',
        time: new Date(),
        isComplete: false,
        isSelect: false
      },
      {
        id: '103',
        text: 'main todo task',
        description: 'this is text three',
        time: new Date(),
        isComplete: false,
        isSelect: false
      }
    ],
    isOpenForm: false,
    searchTerm: '',
    view: 'list',
    filter: 'all'
  }

  toggleSelect = (todoId) => {
    const todos = [...this.state.todos]
    const todo = todos.find(todo => todo.id === todoId)
    todo.isSelect = !todo.isSelect
    this.setState({ todos })
  }
  
  toggleComplete = (todoId) => {
    const todos = [...this.state.todos]
    const todo = todos.find(todo => todo.id === todoId)
    todo.isComplete = !todo.isComplete
    this.setState({ todos })
  }

  toggleForm = () => {
    this.setState({
      isOpenForm: !this.state.isOpenForm
    })
  }

  handleSearch = (searchValue) => {
    console.log(searchValue);
    this.setState({ searchTerm: searchValue })
  }

  performSearch = () => {
    return this.state.todos.filter(todo =>
      todo.text
        .toLowerCase()
        .includes(this.state.searchTerm.toLowerCase())
    )
  }

  handleFilter = (filterValue) => {
    this.setState({ filter: filterValue })
  }
  
  performFilter = (todos) => {
    const { filter } = this.state
    if (filter === 'completed') {
      return todos.filter(todo => todo.isComplete)
    } else if (filter === 'running') {
      return todos.filter(todo => !todo.isComplete)
    } else {
      return todos
    }
  }

  clearSelected = () => {
    const todos = this.state.todos.filter(todo => !todo.isSelect)
    this.setState({ todos })
  }
  
  clearCompleted = () => {
    const todos = this.state.todos.filter(todo => !todo.isComplete)
    this.setState({ todos })
  }
  
  reset = () => {
    this.setState({
      filter: 'all',
      searchTerm: '',
      view: 'list',
      isOpenForm: false
    })
  }
  
  createTodo = (todo) => {
    todo.id = shortid.generate()
    todo.time = new Date()
    todo.isComplete = false
    todo.isSelect = false
    
    const todos = [todo, ...this.state.todos]
    this.setState({ todos })
    this.toggleForm()
  }
  
  changeView = (e) => {
    this.setState({
      view: e.target.value
    })
  }

  getView = () => {
    let todos = this.performSearch();
    todos = this.performFilter(todos);
    return this.state.view === 'list' ? (
      <ListView
        todos={todos}
        toggleSelect={this.toggleSelect}
        toggleComplete={this.toggleComplete}
      />
    ) : (
      <TableView
        todos={todos}
        toggleSelect={this.toggleSelect}
        toggleComplete={this.toggleComplete}
      />
    )
  }

  render() {
    return (
      <div>
        <h1 className='display-4 text-center mb-5'>Stack Todos</h1>
        <Controller
          term={this.searchTerm}
          toggleForm={this.toggleForm}
          handleSearch={this.handleSearch}
          view={this.state.view}
          changeView={this.changeView}
          handleFilter={this.handleFilter}
          clearSelected={this.clearSelected}
          clearCompleted={this.clearCompleted}
          reset={this.reset}
        />
        <div>
          {this.getView()}
        </div>
        <Modal
          isOpen={this.state.isOpenForm}
          toggle={this.toggleForm}
        >
          <ModalHeader toggle={this.toggleForm}>
            Create New Todo Item
          </ModalHeader>
          <ModalBody>
            <CreateTodoForm createTodo={this.createTodo} />
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

