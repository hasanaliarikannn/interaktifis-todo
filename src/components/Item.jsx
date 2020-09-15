import React, {useContext, useRef} from 'react';
import {GlobalContext} from '../contexts/GlobalState';

export const Item = ({job}) => {

    const { deleteItem,makeDone } = useContext(GlobalContext);
    const itemRef = useRef(null);
    const jobId = job.id;

    const doneJob = () => {
        
        makeDone(jobId)
    }

    const check = ((job.done)? "alert-warning strike": "alert-primary");

    return (
        <div className="item-list ">
            <div className={`alert ${check} `} onClick={ (jobId) => doneJob(jobId)} ref={itemRef}>
                {job.todo}
                <button type="button" className="close" data-dismiss="alert" onClick={()=> deleteItem(job.id)}>
                    &times;
                </button>
            </div>
        </div>
    )
}
