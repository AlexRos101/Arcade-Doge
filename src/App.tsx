import React, { useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Menu from './components/Menu'
import Footer from './components/Footer'
import PageLoader from './components/PageLoader'

const Home = lazy(() => import('./views/Home'))
const NotFound = lazy(() => import('./views/NotFound'))

const App: React.FC = () => {
  return (
    <Router>
      <Menu />
      <div className="page-space" />
      <Suspense fallback={<PageLoader />}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  )
}

export default React.memo(App)
