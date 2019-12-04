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

  useEffect(() => {
    getEmployeeData()
  }, [])

  return (
    <>
      <main>
        {employees.map((employee, i) => {
          return (
            <section className="employee" key={i}>
              <p>
                {employee.firstName} {employee.lastName} | {employee.jobTitle}
              </p>
              <p>Full-Time Status: {employee.isFullTime.toString()}</p>
            </section>
          )
        })}
      </main>
    </>
  )
}

export default AllEmployeesComp
