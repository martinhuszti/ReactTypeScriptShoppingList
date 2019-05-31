import React from 'react'
import ShoppingItem from '../../models/ShoppingItem';
import moment from 'moment'
import { Card } from 'react-bootstrap'

const styles = require('./ItemSummaryStyle.css');


const ItemSummary = ({ item }: { item: ShoppingItem }) => {
    return (
        <Card className="shopping item card" bg="info" text="white" style={{ width: '18rem' }}>
        <Card.Header>{item.title}</Card.Header>
        <Card.Body>
          <Card.Title>Felvette:{item.createdBy}</Card.Title>
          <Card.Text>
          {moment(item.createdDate.toDate().toISOString()).calendar()}
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default ItemSummary;