import React from 'react'
import {ButtonGroup, Button} from 'reactstrap'
import PropTypes from 'prop-types'

const FilterController = ({handleFilter}) => {
  return (
    <ButtonGroup>
        <Button onClick={() => handleFilter('all')}>All</Button>
        <Button onClick={() => handleFilter('running')}>Running</Button>
        <Button onClick={() => handleFilter('completed')}>Completed</Button>
    </ButtonGroup>
  )
}

FilterController.prototype = {
    handleFilter: PropTypes.func.isRequired
}

export default FilterController