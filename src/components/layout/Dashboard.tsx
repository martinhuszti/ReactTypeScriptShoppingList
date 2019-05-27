import React from 'react'
import ItemList from '../shoppingitem/ItemList';
import { connect } from 'react-redux';
import ShoppingItem from "../../models/ShoppingItem";
import ItemCreate from '../shoppingitem/ItemCreate';

const Dashboard = ({ items }: { items: ShoppingItem[] }) => {

    return (
        <div className="dashboard container">
            <ItemList items={items} />
            <ItemCreate />
        </div>

    )
}

const mapStateToProps = (state: any) => {
    return {
        items: state.item.items
    }
}

export default connect(mapStateToProps)(Dashboard);