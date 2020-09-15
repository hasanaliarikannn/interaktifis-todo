import React from 'react'

export const Button = (props) => {

    const buttonTypes = {
        All: "btn btn-info",
        Done: "btn btn-warning",
        Pending: "btn btn-danger"
    }

    return (
        <>
            <button className={` ${buttonTypes[props.type] } btn-lg `} >
            {props.type} 
            <span className="badge badge-light">{props.count}</span>
            </button>
        </>
    )
}
