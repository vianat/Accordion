import React, {useState} from 'react'
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion
};

const callback = action("click")

const onClick = (value: any)=> {
    alert(value)
}

export const menuAccordion = () => <Accordion
                                        titleValue={"menuAccordion"}
                                        collapsed={true}
                                        onChange={callback}
                                        items={[{title:"five", value: "5"},
                                                {title:"six", value: "6"}]}
                                        onClick={onClick}/>;
export const usersAccordion = () => <Accordion
                                        titleValue={"usersAccordion"}
                                        collapsed={false}
                                        onChange={callback}
                                        items={[{title:"third", value: "3"},
                                                {title:"four", value: "4"}]}
                                        onClick={onClick}/>;

// doesnt work
export const ModeChanging = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true)

    return  <Accordion
                titleValue={"ModeChanging"}
                collapsed={collapsed}
                onChange={()=>{setCollapsed(!collapsed)}}
                items={[
                    {title:"third", value: "3"},
                    {title:"four", value: "4"} ]}
                onClick={onClick}/>};