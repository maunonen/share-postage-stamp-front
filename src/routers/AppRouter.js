import React from 'react'
import { BrowserRouter , Route, Switch } from 'react-router-dom'
import StampDashBoard from '../components/StampDashBoard';


const AppRouter = () => (
    <div className="App">
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" component={ StampDashBoard} exact={true}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    </div>
)

export default AppRouter