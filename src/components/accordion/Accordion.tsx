import React from "react";

export type ItemType={
    title: string
    value: any
}
type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
    onChange: (value: boolean) => void
    items: Array<ItemType>
    onClick:(value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    return <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange} />
            { !props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/> }
        </div>
}
type AccordionTitlePropsType = {
    title: string
    onChange: (value: any) => void
}
function AccordionTitle(props: AccordionTitlePropsType){
    return <h3 onClick={(e)=>props.onChange}>{props.title}</h3>
}

type AccordionBodyPropstype = {
    items: Array<ItemType>
    onClick:(value: any) => void
}
function AccordionBody(props: AccordionBodyPropstype) {
    return <ul>
            {props.items.map((el,index)=><div onClick={()=>{props.onClick(el.value)}}
                                                                   key={index}>{el.title}</div>)}
        </ul>
}