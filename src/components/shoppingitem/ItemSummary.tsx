import React, { CSSProperties, useState } from 'react'
import ShoppingItem from '../../models/ShoppingItem';
import moment from 'moment'
import { Card, Button, Collapse } from 'react-bootstrap'
import { connect } from 'react-redux';
import { archiveItem } from '../../store/actions/shoppingItemActions';
import { Delete, KeyboardArrowDown } from '@material-ui/icons';


const ItemSummary = (props: any) => {
  const { item }: { item: ShoppingItem } = props
  const { archiveItem } = props
  const [cardOpen, setCardOpen] = useState(false)

  const cardStyle = {
    marginBottom: '1rem',
    maxWidth: '25em',
  } as CSSProperties

  const cardHeaderStyle = {
    paddingTop: '0.3em',
    paddingBottom: '0.3rem',
    display: "flex",
    alignItems: "center",
    paddingRight: '0',
  } as CSSProperties

  const buttonStyle = {
    float: "right"
  } as CSSProperties

  const marginStlye = {
    marginLeft: "auto",
  } as CSSProperties


  const handleDelete = (evt: any) => {
    evt.preventDefault();
    archiveItem(item)
  }

  return (
    <Card style={cardStyle} className="shopping item card" bg="warning" text="white">
      <Card.Header style={cardHeaderStyle} >
        <span>{item.quantity} {item.quantity_measure} {item.title}</span>
        <div style={marginStlye}>
          <Button style={buttonStyle} variant="link" onClick={() => setCardOpen(!cardOpen)}><KeyboardArrowDown /></Button>
          <Button variant="link" onClick={handleDelete}><Delete /></Button>
        </div>
      </Card.Header>
      <Collapse in={cardOpen}>
        <div id="example-collapse-text"> {/* For Smooth Animation */}

          <Card.Footer>

            {item.description ? <Card.Text>
              {item.description}
            </Card.Text> : null}

            <Card.Text className="text-muted">
              {item.created_by_user_id} {moment(item.createdDate.toDate().toISOString()).calendar()}
            </Card.Text>
          </Card.Footer>
        </div>
      </Collapse>

    </Card>
  )
}

const mapDispatchProps = (dispatch: any) => {
  return {
    archiveItem: (item: ShoppingItem) => dispatch(archiveItem(item))
  }
}

export default connect(null, mapDispatchProps)(ItemSummary);