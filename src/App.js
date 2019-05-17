import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Route, Router, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import { PrivateRoute } from './components'
import { theme } from './theme/globalStyle'
import { Login, Dashboard } from './routes'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`

const history = createHistory()

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />

        <Router history={history}>
          <Switch>
            <Route exact path='/login' component={Login} />
            <PrivateRoute path='/' component={Dashboard} />
          </Switch>
        </Router>
      </>
    </ThemeProvider>
  )
}

export default App
