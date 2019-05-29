import React from 'react'
import ItemList from '../shoppingitem/ItemList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import ShoppingItem from "../../models/ShoppingItem";
import ItemCreate from '../shoppingitem/ItemCreate';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

const Dashboard = (props: any) => {
    const { items }: { items: ShoppingItem[] } = props
    const { auth } = props

    if (!auth.uid) return <Redirect to='/signin' />
    return (
        <div className="dashboard container">
            <ItemList items={items} />
            <ItemCreate />
        </div>

    )
}

const mapStateToProps = (state: any) => {
    return {
        items: state.firestore.ordered.shopping_items,
        auth: state.firebase.auth,
    }
}

export default compose<any>
    (connect(mapStateToProps),
        firestoreConnect([{
            collection: 'shopping_items'
        }])
    )(Dashboard);