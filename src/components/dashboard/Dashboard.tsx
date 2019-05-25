import React from 'react'
import ItemList from './ItemList';
import { connect } from 'react-redux';
import ShoppingItem from "../../models/ShoppingItem";

const Dashboard = (props: any) => {
    const { items }: { items: ShoppingItem[] } = props

    return (
        <div className="dashboard container">
            <ItemList items={items} />
        </div>

    )
}

const mapStateToProps = (state: any) => {
    return {
        items: state.item.items
    }
}

export default connect(mapStateToProps)(Dashboard);