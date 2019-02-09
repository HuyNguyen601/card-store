import React from "react"
import { Router } from "@reach/router"
import PrivateRoute from "../components/privateRoute"
import Layout from "../components/layout"
import Add from "../components/add"
import Login from "../components/login"

const App = () => (
    <Router>
      <PrivateRoute path="/app/add" component={Add}/>
      <Login path="/app/login" />
    </Router>
)

export default App
