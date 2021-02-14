import React, {useState} from 'react'
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff stories',
    component: OnOff
};

const callback = action("click")

export const onTrue = () => <OnOff on={true} onChange={callback}/>;

export const onFalse = () => <OnOff on={false} onChange={callback}/>;

export const OnChange = () => {
    let [switchOn, setSwitch] = useState<boolean>(true);
    return <OnOff on={switchOn} onChange={setSwitch}/>;
}
