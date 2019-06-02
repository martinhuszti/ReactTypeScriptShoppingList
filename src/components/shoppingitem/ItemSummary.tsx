import React, { CSSProperties } from 'react'
import ShoppingItem from '../../models/ShoppingItem';
import moment from 'moment'
import { Card, Button, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux';
import { archiveItem } from '../../store/actions/shoppingItemActions';

const ItemSummary = (props: any) => {
  const { item }: { item: ShoppingItem } = props
  const { archiveItem } = props

  const pStyle = {
    marginTop: '1em',
  } as CSSProperties

  const handleDelete = (evt: any) => {
    evt.preventDefault();
    archiveItem(item)
  }

  return (
    <Card style={pStyle} className="shopping item card" bg="warning" text="white">
      <Card.Header>
        <Row>
          <Col >
            <span>{item.quantity} {item.quantity_measure} </span>
            <span>{item.title}</span>
          </Col>
          <Col xs={4} lg={3} xl={2}> <Button variant="danger" onClick={handleDelete}>Törlés</Button></Col>
        </Row>

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