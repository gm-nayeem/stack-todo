import React from 'react'
import { Label, Input } from 'reactstrap'
import PropTypes from 'prop-types'

const ViewController = ({ view, changeView }) => {
    return (
        <div className='d-flex'>
            <Label for='list-view' style={{marginRight: "10px"}}>
                <Input
                    type='radio'
                    name='view'
                    value='list'
                    id='list-view'
                    onChange={changeView}
                    checked={view === 'list'}
                    className='d-inline-block'
                />
                List View
            </Label>
            <Label for='table-view'>
                <Input
                    type='radio'
                    name='table'
                    value='table'
                    id='table-view'
                    onChange={changeView}
                    checked={view === 'table'}
                    className='d-inline-block'
                />
                Table View
            </Label>
        </div>

    )
}

ViewController.prototype = {
    view: PropTypes.string.isRequired,
    changeView: PropTypes.func.isRequired
}

export default ViewController