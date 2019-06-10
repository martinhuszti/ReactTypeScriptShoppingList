import React, { CSSProperties } from 'react'
import ItemList from '../shoppingitem/ItemList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import ItemCreate from './ItemCreate';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
//import Notifications from '../notification/Notifications'

const Dashboard = (props: any) => {
    const { items, auth } = props
    //const { notifications } = props
    console.log(props)


    const dashboardStyle = {
        marginTop: '1em'
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

var sharedGroupId: string = ""
export default compose<any>(

    firestoreConnect(() => {

        return [{
            collection: 'shopping_items',
            where: ["groupId", "==", sharedGroupId],
            orderBy: ['createdDate', 'desc'],
        }]

    }

    ),

    connect((props: any) => {
        const { groupId }: { groupId: string } = props.firebase.profile
        sharedGroupId = groupId ? groupId : ""
        return (
            {
                items: props.firestore.ordered.shopping_items,
                auth: props.firebase.auth,
                profile: props.firebase.profile,
                //notifications: props.firestore.ordered.notifications,
            })
    })

)(Dashboard) as any;