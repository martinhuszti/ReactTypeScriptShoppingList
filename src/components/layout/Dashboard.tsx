import React, { CSSProperties } from 'react'
import ItemList from '../shoppingitem/ItemList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import ItemCreateModal from './ItemCreate';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import ShoppingItem from '../../models/ShoppingItem';


const dashboardStyle = {
    marginTop: '1em'
} as CSSProperties

const Dashboard = (props: any) => {
    require('./Dashboard.css')
    const { auth } = props
    console.log(props)

    const { items }: { items: ShoppingItem[] } = props

    let archived: Array<ShoppingItem> = new Array()
    let unArchived: Array<ShoppingItem> = new Array()

    items && items.map(i => {
        i.archived ? archived.push(i) : unArchived.push(i)
    })



    if (!auth.uid) return <Redirect to='/signin' />
    return (
        <div style={dashboardStyle} className="dashboard container">

            <ItemList items={unArchived} />
            <hr className="divider" />
            <h6>Archívált</h6>
            <ItemList items={archived} />

            <ItemCreateModal />
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