import React from "react";

type propsType = {
    on: boolean
    onChange: (value: boolean) => void
}

export function OnOff(props: propsType) {

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
            <div style = {onStyle}  onClick={ () => { props.onChange(true)} }> on </div>
            <div style = {offStyle} onClick={ () => { props.onChange(false)} }> off </div>
        </div>
    )
}