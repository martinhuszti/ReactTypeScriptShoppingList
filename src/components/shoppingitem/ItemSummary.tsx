import React, { CSSProperties } from 'react'
import ShoppingItem from '../../models/ShoppingItem';
import moment from 'moment'
import { Card, Button } from 'react-bootstrap'
import { connect } from 'react-redux';
import { archiveItem } from '../../store/actions/shoppingItemActions';

const ItemSummary = (props: any) => {
  const { item }: { item: ShoppingItem } = props
  const { archiveItem } = props

  const cardStyle = {
    marginBottom: '1em',
  } as CSSProperties

  const cardHeaderStyle = {
    paddingTop: '0.3em',
    paddingBottom: '0.3em',
    display: 'inline-block'
  } as CSSProperties

  const buttonStyle = {
    float: "right"
  } as CSSProperties

  const handleDelete = (evt: any) => {
    evt.preventDefault();
    archiveItem(item)
  }

  return (
    <Card style={cardStyle} className="shopping item card" bg="warning" text="white">
      <Card.Header style={cardHeaderStyle} >
        <span>{item.quantity} {item.quantity_measure} {item.title}</span>
        <Button style={buttonStyle} variant="danger" onClick={handleDelete}>Törlés</Button>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          {item.description}
        </Card.Text>

        <Card.Text>
          {item.created_by_user_id} {moment(item.createdDate.toDate().toISOString()).calendar()}

        </Card.Text>
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