import React, { CSSProperties } from 'react'
import ShoppingItem from '../../models/ShoppingItem';
import moment from 'moment'
import { Card, Button } from 'react-bootstrap'
import { connect } from 'react-redux';
import { archiveItem } from '../../store/actions/shoppingItemActions';

const ItemSummary = ( props: any) => {
 const {item} : {item: ShoppingItem} = props 
 const {archiveItem} = props 

  const pStyle = {
    marginTop: '1em',
   } as CSSProperties

  const handleDelete = (evt: any) => {
    evt.preventDefault();
    archiveItem(item)
  }

  return (
    <Card style={pStyle} className="shopping item card" bg="warning" text="white">
      <Card.Header>{item.title}</Card.Header>
      <Card.Body>
        <Card.Title>Felvette:{item.created_by_user_id}</Card.Title>
        <Card.Text>
          {moment(item.createdDate.toDate().toISOString()).calendar()}
        </Card.Text>
        <Button variant="danger" onClick={handleDelete}>Törlés</Button>

      </Card.Body>
    </Card>
  )
}

const mapDispatchProps = (dispatch: any) => {
  return {
    archiveItem: (item: ShoppingItem) => dispatch(archiveItem(item))
  }
}

export default connect(null, mapDispatchProps)(ItemSummary);