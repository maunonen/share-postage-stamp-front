import React from 'react'
import { BrowserRouter , Route, Switch } from 'react-router-dom'
import AppDashBoard from '../components/AppDashBoard'
import AppHeader from '../components/AppHeader'
import AppConditions from '../components/AppConditions'
import StampSend from '../components/stamp/StampSend'
import AppContactPage from '../components/AppContactPage'
import AppNotFoundPage from '../components/AppNotFoundPage'
import StampForm from '../components/stamp/StampForm';

        /* <NavLink to="/rules">rules</NavLink> Conditions
        <NavLink to="/sendnew" >send new</NavLink> SendStamp
        <NavLink to="/dashboard" >dashboard</NavLink> 
        <NavLink to="/contactus" >contact us</NavLink> ContactPage
        <NavLink to="/help" >sign out</NavLink> */

const AppRouter = () => (
    <div className="App">
        <BrowserRouter>
            <div>
                <AppHeader/>
                <Switch>
                    <Route path="/" component={AppDashBoard} exact={true}></Route>
                    <Route path="/sendnew"  component={StampSend}></Route>
                    <Route path="/rules" component={AppConditions}></Route>
                    <Route path="/dashboard"  component={AppDashBoard}></Route>
                    <Route path="/contactus" component={AppContactPage}></Route>
                    <Route path="/addstamp" component={StampForm}></Route>
                    <Route path="/signout"></Route>
                    <Route component={AppNotFoundPage}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    </div>
)

export default AppRouter