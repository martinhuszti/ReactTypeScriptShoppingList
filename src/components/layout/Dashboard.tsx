import React, { CSSProperties } from 'react'
import ItemList from '../shoppingitem/ItemList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import ItemCreate from '../shoppingitem/ItemCreate';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import Notifications from '../notification/Notifications'

const Dashboard = (props: any) => {
    const { items, auth, notifications } = props

    const dashboardStyle = {
        marginTop : '1em'
    } as CSSProperties

    if (!auth.uid) return <Redirect to='/signin' />
    return (
        <div style={dashboardStyle} className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <ItemList items={items} />
                </div>
                {/* <div className="col s12 m5 offset-m1">
                    <Notifications notifications={notifications} />
                </div> */}
            </div>
            <ItemCreate />
        </div>

    )
}

const mapStateToProps = (state: any) => {
    return {
        items: state.firestore.ordered.shopping_items,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose<any>
    (connect(mapStateToProps),
        firestoreConnect([
            { collection: 'shopping_items', orderBy: ['createdDate', 'desc'] },
            { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] }
        ])
    )(Dashboard);