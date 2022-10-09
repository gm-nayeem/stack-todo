import React from 'react'
import {ButtonGroup, Button} from 'reactstrap'
import PropTypes from 'prop-types'

const BulkController = ({clearSelected, clearCompleted, reset}) => {
  return (
    <ButtonGroup>
        <Button color='danger' onClick={() => clearSelected('clearSelected')}>Clear Selected</Button>
        <Button color='danger' onClick={() => clearCompleted('clearCompleted')}>Clear Completed</Button>
        <Button color='danger' onClick={() => reset('reset')}>Reset</Button>
    </ButtonGroup>
  )
}

BulkController.prototype = {
    clearSelected: PropTypes.func.isRequired,
    clearCompleted: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired
}

export default BulkController