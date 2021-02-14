import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSE} from "./reducer";

type AccordionPropsType = {
    titleValue: string
}



export function UnControlledAccordion(props: AccordionPropsType) {
    let [state, dispatch] = useReducer(reducer, {collapsed: false})
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={ () => {dispatch({type: TOGGLE_COLLAPSE}) }}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}
type AccordionTitlePropsType = {
    title: string
    onClick: ()=>void
}
function AccordionTitle(props: AccordionTitlePropsType){
    return(
        <h3 onClick={ () => {props.onClick() }}>{props.title}</h3>
    )
}
function AccordionBody(){
    return(
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
    )
}