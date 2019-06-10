import React, { CSSProperties, useState } from 'react'
import ShoppingItem from '../../models/ShoppingItem'
import moment from 'moment'
import { Card, Button, Collapse } from 'react-bootstrap'
import { connect } from 'react-redux'
import { deleteItem, archiveItem } from '../../store/actions/shoppingItemActions'
import { Delete, KeyboardArrowDown, Check } from '@material-ui/icons'
import User from './../../models/User'


const ItemSummary = (props: any) => {
  const { item }: { item: ShoppingItem } = props
  const { profile }: { profile: User } = props
  const { deleteItem, archiveItem } = props
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
    evt.preventDefault()
    deleteItem(item)
  }

  const handleArchive = (evt: any) => {
    evt.preventDefault()
    archiveItem(item, profile.nickName)
  }

  return (<>
    {!item.archived ?
      <Card style={cardStyle} className="shopping item card" bg="warning" text="dark">
        <Card.Header style={cardHeaderStyle} >
          <span><b>{item.quantity} {item.quantity_measure} {item.title}</b></span>
          <div style={marginStlye}>
            <Button style={buttonStyle} variant="link" onClick={() => setCardOpen(!cardOpen)}><KeyboardArrowDown /></Button>
            {/* <Button variant="link" onClick={handleDelete}><Delete /></Button> */}
            <Button variant="link" onClick={handleArchive}><Check /></Button>
          </div>
        </Card.Header>
        <Collapse in={cardOpen}>
          <div id="example-collapse-text"> {/* For Smooth Animation */}
            <Card.Footer>
              {item.description ? <Card.Text>
                <b>Megjegyzés</b>: {item.description}
              </Card.Text> : null}
              <Card.Text className="text-muted">
                <i>{item.created_by_user_id} {moment(item.createdDate.toDate().toISOString()).calendar()}</i>
              </Card.Text>
            </Card.Footer>
          </div>
        </Collapse>
      </Card>
      :
      <Card style={cardStyle} className="shopping item card" bg="light" text="dark">
        <Card.Header style={cardHeaderStyle} >
          <span><b>{item.quantity} {item.quantity_measure} {item.title}</b></span>
          <div style={marginStlye}>
            <Button style={buttonStyle} variant="link" onClick={() => setCardOpen(!cardOpen)}><KeyboardArrowDown /></Button>
            <Button variant="link" onClick={handleDelete}><Delete /></Button>
            {/* <Button variant="link" onClick={handleArchive}><Check /></Button> */}
          </div>
        </Card.Header>
        <Collapse in={cardOpen}>
          <div id="example-collapse-text"> {/* For Smooth Animation */}
            <Card.Footer>
              {item.description ? <Card.Text>
                <b>Megjegyzés</b>: {item.description}
              </Card.Text> : null}
              <Card.Text className="text-muted">
                <i>{item.created_by_user_id} {moment(item.createdDate.toDate().toISOString()).calendar()}</i>
              </Card.Text>
            </Card.Footer>
          </div>
        </Collapse>
      </Card>
    }

  </>)
}

const mapDispatchProps = (dispatch: any) => {
  return {
    deleteItem: (item: ShoppingItem) => dispatch(deleteItem(item)),
    archiveItem: (item: ShoppingItem, nickname: string) => dispatch(archiveItem(item, nickname)),
  }
}

const mapStateToProps = (state: any) => {
  return {
    profile: state.firebase.profile,
  }
}

export default connect(mapStateToProps, mapDispatchProps)(ItemSummary);