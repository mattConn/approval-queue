import './index'
import './index.scss'

const Unprocessed = (props) => (
    <div className={`item-unproc item-row ${props.selected ? 'item-selected' : null}`} onClick={props.clickHandler}>
        <p className="image">{props.image}</p>
        <p className="submitter">{props.submitter}</p>
        <p className="priority">{props.priority}</p>
        <p className="submitted-at">{props.submittedAt}</p>
    </div>
)

export default Unprocessed