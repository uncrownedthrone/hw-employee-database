import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AddEmployeeComp = () => {
  const [resetPage, setResetPage] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthday, setBirthday] = useState('')
  const [hireDate, setHireDate] = useState('')
  const [isFullTime, setIsFullTime] = useState('')
  const [profileImage, setProfileImage] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')
  const [email, setEmail] = useState('')
  const [emergencyContactPerson, setEmergencyContactPerson] = useState('')
  const [emergencyContactPhone, setEmergencyContactPhone] = useState('')
  const [emergencyContactAddress, setEmergencyContactAddress] = useState('')
  const [ptoHours, setPtoHours] = useState('')

  const submitData = async e => {
    e.preventDefault()
    const resp = await axios.post(
      'https://sdg-staff-directory-app.herokuapp.com/api/Avado/Employees',

      {
        firstName: firstName,
        lastName: lastName,
        birthday: birthday,
        hiredDate: hireDate,
        isFullTime: isFullTime,
        profileImage: profileImage,
        jobTitle: jobTitle,
        jobDescription: jobDescription,
        phoneNumber: phoneNumber,
        address: address,
        city: city,
        state: state,
        zip: zip,
        email: email,
        emergencyContactPerson: emergencyContactPerson,
        emergencyContactPhone: emergencyContactPhone,
        emergencyContactAddress: emergencyContactAddress,
        ptoHours: ptoHours,
      }
    )
    console.log(resp.data)
    setResetPage(true)
  }

  return (
    <>
      <main>
        <h2>Add a New Employee</h2>
        <form onSubmit={submitData}>
          <section>
            <section className="labels">
              <label htmlFor="firstName">First Name</label>
              <input
                onChange={e => {
                  setFirstName(e.target.value)
                }}
                value={firstName}
                type="text"
              />
            </section>
            <section className="labels">
              <label htmlFor="lastName">Last Name</label>
              <input
                onChange={e => {
                  setLastName(e.target.value)
                }}
                value={lastName}
                type="text"
              />
            </section>
            <section className="labels">
              <label htmlFor="birthday">Date of Birth</label>
              <input
                className="dateBox"
                onChange={e => {
                  setBirthday(e.target.value)
                }}
                type="date"
                value={birthday}
              />
            </section>
            <section className="labels">
              <label htmlFor="hireDate">Hire Date</label>
              <input
                className="dateBox"
                onChange={e => {
                  setHireDate(e.target.value)
                }}
                type="date"
                value={hireDate}
              />
            </section>
            <section className="labels">
              <label htmlFor="fullTime">Full Time</label>
              <select
                onChange={e => {
                  setIsFullTime(e.target.value)
                }}
                type="text"
                value={isFullTime}
              >
                <option value="">--</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </section>
            <section className="labels">
              <label htmlFor="profileImage">Profile Image</label>
              <input
                onChange={e => {
                  setProfileImage(e.target.value)
                }}
                type="url"
                value={profileImage}
                placeholder="Enter URL"
              />
            </section>

            <section className="labels">
              <label htmlFor="jobTitle">Job Title</label>
              <input
                onChange={e => {
                  setJobTitle(e.target.value)
                }}
                type="text"
                value={jobTitle}
              />
            </section>
            <section className="labels">
              <label htmlFor="jobDescription">Job Description</label>
              <input
                onChange={e => {
                  setJobDescription(e.target.value)
                }}
                type="text"
                value={jobDescription}
              />
            </section>
            <section className="labels">
              <label htmlFor="phone">Phone Number</label>
              <input
                onChange={e => {
                  setPhoneNumber(e.target.value)
                }}
                type="text"
                value={phoneNumber}
              />
            </section>

            <section className="labels">
              <label htmlFor="address">Address</label>
              <input
                onChange={e => {
                  setAddress(e.target.value)
                }}
                type="text"
                value={address}
              />
            </section>
            <section className="labels">
              <label htmlFor="city">City</label>
              <input
                onChange={e => {
                  setCity(e.target.value)
                }}
                type="text"
                value={city}
              />
            </section>
            <section className="labels">
              <label htmlFor="state">State</label>
              <input
                onChange={e => {
                  setState(e.target.value)
                }}
                type="text"
                value={state}
              />
            </section>
            <section className="labels">
              <label htmlFor="zip">Zip</label>
              <input
                onChange={e => {
                  setZip(e.target.value)
                }}
                type="text"
                value={zip}
              />
            </section>
            <section className="labels">
              <label htmlFor="email">E-mail</label>
              <input
                onChange={e => {
                  setEmail(e.target.value)
                }}
                type="text"
                value={email}
              />
            </section>
            <section className="labels">
              <label htmlFor="emergencyContactName">ICE Person</label>
              <input
                onChange={e => {
                  setEmergencyContactPerson(e.target.value)
                }}
                type="text"
                value={emergencyContactPerson}
              />
            </section>
            <section className="labels">
              <label htmlFor="emergencyContactPhone">ICE Phone</label>
              <input
                onChange={e => {
                  setEmergencyContactPhone(e.target.value)
                }}
                type="text"
                value={emergencyContactPhone}
              />
            </section>
            <section className="labels">
              <label htmlFor="emergencyContactEmail">ICE E-mail</label>
              <input
                onChange={e => {
                  setEmergencyContactAddress(e.target.value)
                }}
                type="text"
                value={emergencyContactAddress}
              />
            </section>
            <section className="labels">
              <label htmlFor="pto">PTO Hours</label>
              <input
                onChange={e => {
                  setPtoHours(e.target.value)
                }}
                type="text"
                value={ptoHours}
              />
            </section>
            <section className="submitButton">
              <button type="submit">Submit</button>
            </section>
          </section>
        </form>
        <footer>*ICE = In Case of Emergency</footer>
      </main>
    </>
  )
}

export default AddEmployeeComp
