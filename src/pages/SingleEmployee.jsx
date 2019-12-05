import React from 'react'
import SingleEmployeeComp from '../components/SingleEmployeeComp'

const SingleEmployee = props => {
  return <SingleEmployeeComp employeeId={props.match.params.id} />
}

export default SingleEmployee
