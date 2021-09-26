import React from 'react'
import './index'

const Processed = (props) => (
    <div className={"item-unproc item-row"}>
        <button className="resubmit" onClick={props.submitHandler}>Resubmit</button>
        <p className="image">{props.image}</p>
        <p className="reason">{props.reason}</p>
        <p className="submitter">{props.submitter}</p>
        <p className="updated-at">{props.updatedAt}</p>
        <div className="status"><p>{props.status}</p></div>
    </div>
)

export default Processed