import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const AddEmployeeComp = () => {
  return <div>This is the add employees page</div>
}

export default AddEmployeeComp

// const [employees, setEmployees] = useState([])
// const createEmployees = async () => {
//   const resp = await Axios.post(
//     'https://sdg-staff-directory-app.herokuapp.com/api/Avado/Employees',
//     [
//       {
//         id: 801,
//         firstName: 'John',
//         lastName: 'Smith',
//         birthday: '2019-12-04T18:19:06.424Z',
//         hiredDate: '2019-12-04T18:19:06.424Z',
//         isFullTime: true,
//         profileImage: 'string',
//         jobTitle: 'Manager',
//         jobDescription: 'Manages All Employees',
//         phoneNumber: '555-555-5555',
//         interestingFact: 'John likes dolphins. A lot.',
//         address: 'string',
//         city: 'string',
//         zip: 'string',
//         state: 'string',
//         salary: 40000,
//         gender: 'male',
//         email: 'jsmith@avado.com',
//         emergencyContactPerson: 'Sue Smith',
//         emergencyContactPhone: '555-555-5556',
//         emergencyContactAddress: 'Home',
//         ptoHours: 16,
//         companyKey: 'Avado',
//       },
//     ]
//   )
//   console.log(resp.data)
//   setEmployees(resp.data)
// }

// useEffect(() => {
//   createEmployees()
// }, [])

// return (
//   <>
//     <main>
//       {employees.map((employee, i) => {
//         return (
//           <section key={employee}>
//             <p>testing - {employee.id}</p>
//           </section>
//         )
//       })}
//     </main>
//   </>
// )
