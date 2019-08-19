import React from 'react'
import {  Router , Route, Switch  } from 'react-router-dom'
import AppDashBoard from '../components/AppDashBoard'
import AppHeader from '../components/AppHeader'
import AppConditions from '../components/AppConditions'
import StampSend from '../components/stamp/StampSend'
import AppContactPage from '../components/AppContactPage'
import AppNotFoundPage from '../components/AppNotFoundPage'
import StampEdit from '../components/stamp/StampEdit';
import StampAdd from '../components/stamp/StampAdd'



const AppRouter = (props) => (
    <div className="App">
                <div>
                <AppHeader/>
                    <Switch>
                        <Route path="/" component={AppDashBoard} exact={true}></Route>
                        <Route path="/sendnew"  component={StampSend}></Route>
                        <Route path="/rules" component={AppConditions}></Route>
                        <Route path="/dashboard"  component={AppDashBoard}></Route>
                        <Route path="/contactus" component={AppContactPage}></Route>
                        <Route path="/addstamp" component={StampAdd}></Route>
                        <Route path="/editstamp/:id" component={StampEdit}></Route>
                        <Route path="/signout"></Route>
                        <Route component={AppNotFoundPage}></Route>
                    </Switch>
                </div>
    </div>
)

export default AppRouter