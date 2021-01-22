import React from "react";

type propsType = {
    on: boolean
    setOn: (value: boolean) => void
}

function UnControlledOnOff(props: propsType) {


    const onStyle = {
        width: "100px",
        height: "45px",
        border: "1px solid black",
        borderRadius: "20px",
        display: "inline-block",
        margin: "10px",
        paddingTop: "15px",
        backgroundColor: props.on ? "green" : "white"
    }
    const offStyle = {
        width: "100px",
        height: "45px",
        border: "1px solid black",
        borderRadius: "20px",
        display: "inline-block",
        margin: "10px",
        paddingTop: "15px",
        backgroundColor: props.on ? "white" : "green"
    }


    return (
        <div>
            <div style = {onStyle}  onClick={ () => { props.setOn(true)} }> on </div>
            <div style = {offStyle} onClick={ () => { props.setOn(false)} }> off </div>
        </div>
    )
}

export default UnControlledOnOff;