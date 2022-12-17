import { useEffect, useState } from "react"

export default function Alert(props){

//    console.log(props)

    const {display, message} = props.alertData

    return (
        <div className='alert' id={display}>
        <span>{message}</span>
        </div>
    )
}
