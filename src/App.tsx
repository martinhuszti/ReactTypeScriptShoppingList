import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/layout/Dashboard';
import SignIn from './components/auth/SignIn';
import { isLoaded } from 'react-redux-firebase';
import { connect } from 'react-redux';

const App: React.FC = (props: any) => {
    const { auth } = props

    if (isLoaded(auth))
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={Dashboard} />
                        <Route path='/signin' component={SignIn} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    return (<div></div>)
}

const mapStateToProps = (state: any) => {
    console.log(state)
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(App);
