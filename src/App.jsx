import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AllEmployees from './pages/AllEmployees'
import SingleEmployee from './pages/SingleEmployee'
import AddEmployee from './pages/AddEmployee'

const App = () => {
  return (
    <Router>
      <header>
        <h1>
          A<span className="littleLetters">VADO</span>
        </h1>
        <nav>
          <ul className="homePageUl">
            <li className="homePageLi">
              <Link to="/">
                Home <span className="divider">|</span>
              </Link>
            </li>
            <li className="homePageLi">
              <Link to="/all">
                All Employees <span className="divider">|</span>
              </Link>
            </li>
            <li className="homePageLi">
              <Link to="/add">Add Employee</Link>
            </li>
          </ul>
        </nav>
      </header>
      <hr></hr>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/all" component={AllEmployees}></Route>
        <Route exact path="/employee/:id" component={SingleEmployee}></Route>
        <Route exact path="/add" component={AddEmployee}></Route>
      </Switch>
    </Router>
  )
}

export default App
