import React, { useState } from 'react'
import { connect } from 'react-redux';
import ShoppingItem from "../../models/ShoppingItem";
import { createItem } from '../../store/actions/shoppingItemActions';

const ItemCreate = (props: any) => {

    const [item] = useState(new ShoppingItem("4"));


    const handleSubmit = (evt: any) => {
        evt.preventDefault();
        props.createItem(item)
    }



    return (
        <div>
            <div className="container">
                <form onSubmit={handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Add New Item</h5>
                    <div className="input-field">
                        <label htmlFor="text">Mit?</label>
                        <input type="text" id="text" onChange={e => item.title = e.target.value} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="Mennyit">Mennyit?</label>
                        <input type="number" id="number" onChange={e => item.quantity = +e.target.value} />
                    </div>
                    <div className="input-field">
                        <button className="btn green lighten-1 z-depth-0">Add</button>
                    </div>

                </form>
            </div>

        </div>

    )
}

const mapDispatchProps = (dispatch: any) => {
    return {
        createItem: (item: ShoppingItem) => dispatch(createItem(item))
    }
}

export default connect(null, mapDispatchProps)(ItemCreate);