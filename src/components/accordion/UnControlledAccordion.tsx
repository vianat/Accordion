import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}
function UnControlledAccordion(props: AccordionPropsType) {
    let [collapse, setCollapse] = useState(true)
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={ () => {setCollapse(!collapse) }}/>
            {!collapse && <AccordionBody/>}
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

export default UnControlledAccordion;