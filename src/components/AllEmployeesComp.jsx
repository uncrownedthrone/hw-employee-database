import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const AllEmployeesComp = () => {
  const apiUrl =
    'https://sdg-staff-directory-app.herokuapp.com/api/Avado/Employees'
  const [employees, setEmployees] = useState([])
  const getEmployeeData = async () => {
    const resp = await axios.get(apiUrl)
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
            <>
              <section className="employee" key={i}>
                <p>
                  Full-Time: {employee.isFullTime.toString() ? 'Yes' : 'No'}
                </p>
                <p>
                  <Link to={'/employee/' + employee.id}>
                    {employee.firstName} {employee.lastName}
                  </Link>
                  <span> </span>| {employee.jobTitle}
                </p>
                <section className="imageBox">
                  <img src={employee.profileImage} alt="" />
                </section>
              </section>
            </>
          )
        })}
      </main>
    </>
  )
}

export default AllEmployeesComp
