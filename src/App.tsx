import { Center, Heading, Spinner } from '@chakra-ui/react'
import React, { lazy, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Overlay from './components/overlay';
const Index = lazy(() => import('./pages/list/'))
const Manage = lazy(() => import('./pages/manage'))

function App() {
  
  return (
    <div className="App">
      <Router>
        <Overlay />
        <Suspense fallback={<Center h='full'><Spinner size="xl" /></Center>}>
        <Switch>
          <Route path="/@manage/">
            <Manage />
          </Route>
          <Route path="*">
            <Index />
          </Route>
        </Switch>
        </Suspense>
      </Router>
    </div>
  )
}

export default App