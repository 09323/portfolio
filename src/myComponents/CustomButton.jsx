import './custom_button.css'
import React from 'react'

function CustomButton(props){
    const onPressed=(event)=>{
        console.log("on Pressed",event)
    }
    console.log()
    return(
        <button onClick={props.onClick}id={props.id}  className={`btn ${props.colorClass}`}>{props.title}
      
        {props.isdownload &&
        <span class="material-symbols-outlined">
        download
        </span>}</button>
    )
}

export default CustomButton