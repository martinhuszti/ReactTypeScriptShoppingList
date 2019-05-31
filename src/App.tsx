import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Dashboard from './components/layout/Dashboard';
import SignIn from './components/auth/SignIn';
import { isLoaded } from 'react-redux-firebase';
import { connect } from 'react-redux';
import moment from 'moment'
import 'moment/locale/hu'

const App: React.FC = (props: any) => {
    const { auth } = props
    moment().locale("hu");

    if (!isLoaded(auth)) return (<div></div>)

        return (
            <BrowserRouter>
            <div>

                <Header className="z-depth-1"/>
                </div>

                <div className="App">
                    <Switch>
                        <Route exact path='/' component={Dashboard} />
                        <Route path='/signin' component={SignIn} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
}

const mapStateToProps = (state: any) => {
    console.log(state)
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(App);
