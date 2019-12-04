import React, { useState, useEffect } from 'react'
import axios from 'axios'

const AllEmployeesComp = () => {
  const apiUrl =
    'https://sdg-staff-directory-app.herokuapp.com/api/Avado/Employees'
  const [employees, setEmployees] = useState([])
  const getEmployeeData = async () => {
    const resp = await axios.get(apiUrl)
    console.log(resp.data)
    setEmployees(resp.data)
  }

  console.log({ employees })

  useEffect(() => {
    getEmployeeData()
    setEmployees()
  }, [])

  return (
    <>
      <p>test-{employees}</p>
    </>
  )
}

export default AllEmployeesComp
