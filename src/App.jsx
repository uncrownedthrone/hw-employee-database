import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import AllEmployees from './pages/AllEmployees'
import SingleEmployee from './pages/SingleEmployee'
import HomePage from './pages/HomePage'
import AddEmployee from './pages/AddEmployee'

const App = () => {
  return (
    <Router>
      <header>
        <h1>Welcome to my SPA</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home Page</Link>
            </li>
            <li>
              <Link to="/1">All Employees</Link>
            </li>
            <li>
              <Link to="/2">Single Employee</Link>
            </li>
            <li>
              <Link to="/3">Add Employee</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/1" component={AllEmployees}></Route>
        <Route exact path="/2" component={SingleEmployee}></Route>
        <Route exact path="/3" component={AddEmployee}></Route>
      </Switch>
    </Router>
  )
}

export default App
