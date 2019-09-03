import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Dashboard from './components/layout/Dashboard';
import SignIn from './components/auth/SignIn';
import { isLoaded } from 'react-redux-firebase';
import { connect } from 'react-redux';
import moment from 'moment'
import 'moment/locale/hu'
import NewUser from './components/auth/NewUser';
import FamilyGroupCreate from './components/group/FamilyGroupCreate';
import ProfileMainScreen from './components/profile/ProfileMainScreen';

const App: React.FC = (props: any) => {
    const { auth } = props
    moment().locale("hu");

    if (!isLoaded(auth)) return (<div></div>)

    return (
        <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path='/' component={Dashboard} />
                    <Route path='/signin' component={SignIn} />
                    <Route path='/newuser' component={NewUser} />
                    <Route path='/newgroup' component={FamilyGroupCreate} />
                    <Route path='/profile' component={ProfileMainScreen} />
                    <Route component={Dashboard} />
                </Switch>
        </BrowserRouter>
    )
}

const mapStateToProps = (state: any) => {
    //console.log(state)
    return {
        auth: state.firebase.profile
    }
}

export default connect(mapStateToProps)(App);
