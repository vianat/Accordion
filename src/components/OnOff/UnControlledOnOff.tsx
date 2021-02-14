import React, {useState} from "react";

type propsType = {
    onChange: (on: boolean) => void
}

function UnControlledOnOff(props: propsType) {
    let [on, setOn] = useState(false);

    const onStyle = {
        width: "100px",
        height: "45px",
        border: "1px solid black",
        borderRadius: "20px",
        display: "inline-block",
        margin: "10px",
        paddingTop: "15px",
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        width: "100px",
        height: "45px",
        border: "1px solid black",
        borderRadius: "20px",
        display: "inline-block",
        margin: "10px",
        paddingTop: "15px",
        backgroundColor: on ? "white" : "green"
    }
    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <div style = {onStyle}  onClick={ onClicked }> on </div>
            <div style = {offStyle} onClick={ offClicked }> off </div>
        </div>
    )
}

export default UnControlledOnOff;