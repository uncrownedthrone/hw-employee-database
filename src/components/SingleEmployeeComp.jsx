import React, { useState, useEffect } from 'react'
import axios from 'axios'

const SingleEmployeeComp = props => {
  const apiUrl = `https://sdg-staff-directory-app.herokuapp.com/api/Avado/Employees/${props.employeeId}`
  const [employee, setEmployee] = useState({})

  const getSingleEmployeeData = async () => {
    const resp = await axios.get(apiUrl)
    setEmployee(resp.data)
  }

  useEffect(() => {
    getSingleEmployeeData()
  }, [])

  return (
    <>
      <main>
        <>
          <section className="employee">
            <p>Full-Time: {employee.isFullTime ? 'Yes' : 'No'}</p>
            <p>
              {employee.firstName} {employee.lastName}
              <span> </span>| {employee.jobTitle}
            </p>
            <section className="imageBox">
              <img src={employee.profileImage} alt="" />
            </section>
          </section>
        </>
      </main>
      )
    </>
  )
}

export default SingleEmployeeComp
