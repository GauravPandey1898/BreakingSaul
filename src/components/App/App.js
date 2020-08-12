import React from 'react'
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom'


import Homepage from '../Homepage/Homepage'

import Directory from '../directory/directory'

function App()
{
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={Directory} />
                
                <Route exact path='/info' component={Homepage} />
                
            </Switch>
        </Router>
    )
}



export default App;