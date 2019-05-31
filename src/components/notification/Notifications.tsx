import React from 'react'
import moment from 'moment'

const Notifications = (props: any) => {
    const { notifications } = props
    return (
        <div className="section container">
            <div className="card ">
                <div className="card-content">
                    <span className="card-title">
                        Notifications
                    </span>
                    <ul className="notifications">
                        {notifications && notifications.map((notif: any) => {
                            moment.lang('fr')
                            return (
                                <li key={notif.id}>
                                    <span className="pink-text">{notif.title} </span>
                                    <span className="pink-text">{moment(notif.time.toDate()).calendar()}</span>
                                    <br /><br />
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )

}
export default Notifications