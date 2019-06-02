import React, { CSSProperties } from 'react'
import ShoppingItem from '../../models/ShoppingItem';
import moment from 'moment'
import { Card } from 'react-bootstrap'

const pStyle = {
 "margin-top": '1em',
} as CSSProperties

const ItemSummary = ({ item }: { item: ShoppingItem }) => {
  return (
    <Card style={pStyle} className="shopping item card" bg="warning" text="white">
      <Card.Header>{item.title}</Card.Header>
      <Card.Body>
        <Card.Title>Felvette:{item.created_by_user_id}</Card.Title>
        <Card.Text>
          {moment(item.createdDate.toDate().toISOString()).calendar()}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ItemSummary;