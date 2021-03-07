import React, { useState,useEffect } from 'react'
import {Container} from 'react-bootstrap'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import HomeScreen from './screens/homeScreen/HomeScreen'
import LoginScreen from './screens/loginScreen/LoginScreen'
import {  useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import './_app.scss'
import { Redirect, Route, Switch } from 'react-router-dom'


const Layout = ({children}) => {
  const [ sidebar, toggleSidebar] = useState(false)

  const handleToggleSidebar = () => toggleSidebar(value => !value)
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar}/>
        <Container  className="app__main">
            {children}
        </Container>
      </div>
    </>
  )
}
const App = () => {
  const { accessToken, loading} = useSelector(state => state.auth)
  const history = useHistory()

  useEffect(() => {
    if(!loading && !accessToken) {
      history.push('/auth')
    }
  },[accessToken, loading, history])
   return (
      <Switch>
        <Route path="/" exact>
          <Layout>
            <HomeScreen/>
          </Layout>
        </Route>
        <Route path="/auth" exact>
            <LoginScreen/>
        </Route>
        <Route path="/search" exact>
          <Layout>
            <h1>Search Results</h1>
          </Layout>
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
  )
}

export default App
