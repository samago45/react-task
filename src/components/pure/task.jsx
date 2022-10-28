import React from 'react'
import PropTypes from 'prop-types'
import{Task} from '../../models/task.class'

const TaskComponent = ({task}) => {
  return (
    <div>task</div>
  )
}

Task.propTypes = {
    task: PropTypes.instanceOf(Task)
};

export default TaskComponent