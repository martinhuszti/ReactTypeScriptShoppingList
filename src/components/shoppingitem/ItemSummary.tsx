import React, { CSSProperties, useState } from 'react'
import ShoppingItem from '../../models/ShoppingItem'
import moment from 'moment'
import { Card, Button, Collapse, Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import { deleteItem, archiveItem, unArchiveItem } from '../../store/actions/shoppingItemActions'
import { Delete, KeyboardArrowDown, Check } from '@material-ui/icons'
import User from './../../models/User'
import Checkbox from '@material-ui/core/Checkbox';


const ItemSummary = (props: any) => {
  const { item }: { item: ShoppingItem } = props
  const { profile }: { profile: User } = props
  const { deleteItem, archiveItem, unArchiveItem } = props
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

  const strikeStlye = {
    textDecoration: "line-through"
  } as CSSProperties


  const handleDelete = (evt: any) => {
    evt.preventDefault()
    deleteItem(item)
  }

  const handleArchive = (evt: any) => {
    evt.preventDefault()
    archiveItem(item, profile.nickName)
  }

  const handleUnArchive = (evt: any) => {
    evt.preventDefault()
    unArchiveItem(item, profile.nickName)
  }

  return (<>
    {!item.archived ?
      <Card onClick={() => setCardOpen(!cardOpen)} style={cardStyle} className="shopping item card" bg="warning" text="dark">
        <Card.Header style={cardHeaderStyle} >
        <Checkbox onClick={handleArchive} color="primary"/>

          <span><b>{item.quantity} {item.quantity_measure} {item.title}</b></span>
          <div style={marginStlye}>
            <Button style={buttonStyle} variant="link"><KeyboardArrowDown /></Button>
          </div>
        </Card.Header>
        <Collapse in={cardOpen}>
          <div id="example-collapse-text"> {/* For Smooth Animation */}
            <Card.Footer>
              {item.description ? <Card.Text>
              {item.description}
              </Card.Text> : null}
              <Card.Text className="text-muted">
                <i>{item.created_by_user_id} {moment(item.createdDate.toDate().toISOString()).calendar()}</i>
              </Card.Text>
            </Card.Footer>
          </div>
        </Collapse>
      </Card>
      :
      <Card onClick={() => setCardOpen(!cardOpen)} style={cardStyle} className="shopping item card" bg="light" text="dark">
        <Card.Header style={cardHeaderStyle} >
          <Checkbox checked onClick={handleUnArchive} color="primary"/>
          <span style={strikeStlye}><b>{item.quantity} {item.quantity_measure} {item.title}</b></span>
          <div style={marginStlye}>
            <Button style={buttonStyle} variant="link"><KeyboardArrowDown /></Button>
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
    unArchiveItem: (item: ShoppingItem, nickname: string) => dispatch(unArchiveItem(item, nickname)),
  }
}

const mapStateToProps = (state: any) => {
  return {
    profile: state.firebase.profile,
  }
}

export default connect(mapStateToProps, mapDispatchProps)(ItemSummary);