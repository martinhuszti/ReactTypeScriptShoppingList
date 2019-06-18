import React, { CSSProperties, useState } from 'react'
import ShoppingItem from '../../models/ShoppingItem'
import moment from 'moment'
import { Card, Button, Collapse } from 'react-bootstrap'
import { connect } from 'react-redux'
import { deleteItem, archiveItem, unArchiveItem } from '../../store/actions/shoppingItemActions'
import { Delete, KeyboardArrowDown } from '@material-ui/icons'
import User from './../../models/User'
import Checkbox from '@material-ui/core/Checkbox';


const ItemSummary = (props: any) => {
  const { item }: { item: ShoppingItem } = props
  const { profile }: { profile: User } = props
  const { deleteItem, archiveItem, unArchiveItem } = props
  const [cardOpen, setCardOpen] = useState(false)
  const [checkedState, setCheckedState] = useState(item.archived)

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

  const handleCheck = (evt: any) => {
    evt.preventDefault()
    item.archived ? unArchiveItem(item, profile.nickName) : archiveItem(item, profile.nickName)
    setCheckedState(!checkedState)
  }

  return (<>

    <Card style={cardStyle} className="shopping item card" bg={item.archived ? "light" : "warning"} text="dark">
      <Card.Header style={cardHeaderStyle} >
        <Checkbox checked={checkedState} onChange={handleCheck} color="primary" />
        <span style={item.archived? strikeStlye : null}><b>{item.quantity} {item.quantity_measure} {item.title}</b></span>
        <div style={marginStlye}>
          <Button style={buttonStyle} variant="link"  onClick={() => setCardOpen(!cardOpen)}><KeyboardArrowDown /></Button>
          <Button hidden={!item.archived} variant="link" onClick={handleDelete}><Delete /></Button>
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