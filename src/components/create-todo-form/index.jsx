import React, { Component } from 'react'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'
import PropTypes from 'prop-types'

export default class CreateTodoForm extends Component {
    state = {
        text: '',
        description: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createTodo(this.state)
        e.target.reset()
        this.setState({text: '', description: ''})
    }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
            <Label>Enter Task</Label>
            <Input 
                type='text'
                placeholder='do some task'
                name='text'
                value={this.state.text}
                onChange={this.handleChange}
            />
        </FormGroup>
        <FormGroup>
            <Label>Description Task</Label>
            <Input 
                type='textarea'
                placeholder='Write some short description about you'
                name='description'
                value={this.state.description}
                onChange={this.handleChange}
            />
        </FormGroup>
        <Button type='submit'>Create Task</Button>
      </Form>
    )
  }
}

CreateTodoForm.propTypes = {
    createTodo: PropTypes.func.isRequired
}