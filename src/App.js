import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './components/Home'
import ProtectedRouter from './components/ProtectedRouter'
import AboutJob from './components/AboutJob'
import AllJobs from './components/AllJobs'
import NotFound from './components/NotFound'
import LoginForm from './components/LoginForm'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRouter exact path="/" component={Home} />
    <ProtectedRouter exact path="/jobs" component={AllJobs} />
    <ProtectedRouter exact path="/jobs/:id" component={AboutJob} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
