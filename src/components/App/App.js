import React from 'react'
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom'


import Homepage from '../Homepage/Homepage'

import Directory from '../directory/directory'

import notFound from '../notFound/notFound'

function App()
{
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={Directory} />
                
                <Route path='/info' component={Homepage} />
                <Route path='*' component={notFound} />
                
            </Switch>
        </Router>
    )
}



export default App;