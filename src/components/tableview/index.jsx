import React from 'react'
import { Input, Button, Table } from 'reactstrap'

import PropTypes from 'prop-types'

const RowItem = ({ todo, toggleSelect, toggleComplete }) => {
    return (
        <tr>
            <td>
                <Input
                    type='checkbox'
                    id={todo.id}
                    checked={todo.isSelect}
                    onChange={() => toggleSelect(todo.id)}
                />
            </td>
            <td>
                {todo.time.toDateString()}
            </td>
            <td>
                {todo.text}
            </td>
            <td>
                <Button
                    style={{marginLeft: "auto"}}
                    //className='ml-auto'
                    color={todo.isComplete ? 'danger' : 'success'}
                    onClick={() => toggleComplete(todo.id)}
                >
                    {todo.isComplete ? 'Completed' : 'Running'}
                </Button>
            </td>
        </tr>
    )
}

RowItem.prototype = {
    todo: PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired,
}


const TableView = ({todos, toggleSelect, toggleComplete}) => {
    return (
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Time</th>
                    <th>Todo</th>
                    <th>Aciton</th>
                </tr>
            </thead>
            <tbody>
                {todos.map(todo => {
                    return (
                        <RowItem 
                            key={todo.id}
                            todo={todo}
                            toggleSelect={toggleSelect}
                            toggleComplete={toggleComplete}
                        />
                    )
                })}
            </tbody>
        </Table>
    )
}

TableView.prototype = {
    todos: PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired,
}


export default TableView