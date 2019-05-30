import React from 'react'
import ShoppingItem from '../../models/ShoppingItem';
import moment from 'moment'

const ItemSummary = ({ item }: { item: ShoppingItem }) => {
    return (
        <div className="item-list section">
            <div className="card z-depth-0 item-summary">
                <span className="card-title">{item.title}</span>
                <p>Mennyiség: {item.quantity}</p>
                <p>Felvette: {item.createdBy}</p>
                <p>{moment(item.createdDate.toDate().toISOString()).calendar()}</p>

                ----------
            </div>
        </div>
    )
}

export default ItemSummary;