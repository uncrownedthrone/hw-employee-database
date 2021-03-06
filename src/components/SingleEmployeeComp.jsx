import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { format } from 'date-fns'

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
            <p className="singleEmpP">
              {employee.firstName} {employee.lastName}
              <span>&nbsp;</span>| {employee.jobTitle}
            </p>
            <section className="imageBox">
              <img
                className="profileImage"
                src={employee.profileImage}
                alt=""
              />
            </section>
            <ul className="singleEmpUl">
              <li className="singleEmpLi">Born {employee.birthday}</li>
              <li className="singleEmpLi">Hired {employee.hiredDate}</li>
              <li className="singleEmpLi">
                Job Description - {employee.jobDescription}{' '}
              </li>
              <li className="singleEmpLi">
                Address - {employee.address} {employee.city}, {employee.state}{' '}
                {employee.zip}
              </li>
              <li className="singleEmpLi">
                Contact - {employee.email} | {employee.phoneNumber}
              </li>
              <li className="singleEmpLi">
                Emergency Contact - {employee.emergencyContactPerson}
              </li>
              <li className="singleEmpLi">
                PTO Left - {employee.ptoHours} hrs
              </li>
            </ul>
          </section>
        </>
      </main>
    </>
  )
}

export default SingleEmployeeComp
