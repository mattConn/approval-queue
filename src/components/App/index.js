import React from 'react';
import '../Item'
import makeDate from '../../helpers';
import Item from '../Item';
import Unprocessed from '../Item/unprocessed';
import Processed from '../Item/processed';

import './index.scss';


class App extends React.Component {
    state = {
        items: [
            new Item('10/5/2019', 'johnsmith@hotmail.com', 'panda.png',1),
            new Item('11/8/2017', 'john@aol.com', 'horse.png',2),
            new Item('11/8/2018', 'janedoe@hotmail.com', 'cow.png',1),
        ],
        currentItemIndex: 0,
    } 

    priorities = ['Low', 'Standard', 'High']

    render() {
        return (
            <div className="app-ctn">

                <div className="unprocessed-and-approval">
                    <div className="unprocessed-ctn" style={{borderBottom: 'none'}}>
                        <h1>Submissions</h1>
                        <div className="table-header item-row">
                            <p>Image File</p>
                            <p>Submitter</p>
                            <p>Priority</p>
                            <p>Submitted At</p>
                        </div>

                        {this.state.items.sort((i,j)=>(
                            new Date(i.submittedAt) - new Date(j.submittedAt)
                        )).map((item, index)=>{
                            if(item.processed) return null
                            return <Unprocessed
                            clickHandler={()=>{
                                this.setState({currentItemIndex: index})
                            }}
                            image={item.image}
                            submitter={item.submitter}
                            priority={this.priorities[item.priority]}
                            submittedAt={makeDate(item.submittedAt)}
                            selected={this.state.currentItemIndex == index ? true : false}
                            />
                        })}
                    </div> {/*end unprocessed */}

                    <div className="approval-ctn">
                        <div className="image">
                            <img src={`../../images/${!this.state.currentItemIndex ? '../../images/placeholder.png' : this.state.items[this.state.currentItemIndex].image}`}/>
                            <button className="approve" onClick={ ()=>{
                                const items = this.state.items
                                items[this.state.currentItemIndex].status = true;
                                items[this.state.currentItemIndex].processed = true;
                                this.setState({items: items})
                            }
                            }>Approve</button>
                            <button className="deny" onClick={ ()=>{
                                const items = this.state.items
                                items[this.state.currentItemIndex].status = false;
                                items[this.state.currentItemIndex].processed = true;
                                this.setState({items: items})
                            }
                            }>Deny</button>
                        </div>
                    </div>
                </div> 

                <div className="processed-ctn">
                    <h1>Processed</h1>
                    <div className="table-header item-row">
                        <p></p>
                        <p>Image File</p>
                        <p>Reason</p>
                        <p>Submitter</p>
                        <p>Updated</p>
                        <p>Status</p>
                    </div>
                    {this.state.items.sort((i,j)=>(
                        new Date(i.updatedAt) - new Date(j.updatedAt)
                    )).map((item,index)=>{
                            if(!item.processed) return null
                            return <Processed
                            submitHandler={() => {
                                const items = this.state.items
                                items[index].processed = false
                                this.setState({items: items})
                            }
                            }
                            reason={!item.reason ? 'null' : item.reason}
                            image={item.image}
                            submitter={item.submitter}
                            updatedAt={makeDate(item.submittedAt)}
                            status={!item.status ? 'Denied' : 'Approved'}
                            />
                    })}
                </div>
            </div>
        )
    }
}

export default App;