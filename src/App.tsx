import React, { useState} from 'react';
import './App.css';
import Rating, {RatingValueType} from './components/Rating/Rating';
import {UnControlledAccordion} from "./components/accordion/UnControlledAccordion";
import UnControlledRating from "./components/Rating/UnControlledRating";
import UnControlledOnOff from './components/OnOff/UnControlledOnOff';
import {OnOff} from "./components/OnOff/OnOff";
import {Accordion} from "./components/accordion/Accordion";
import Select, {ItemType} from "./components/select/Select";

function App(props: any) {
    type SelectType = 1|2|3|4

    let [ratingValue, setRatingValue] = useState<RatingValueType>(1);
    let [accodionCollapsed, setAccodionCollapsed] = useState<boolean>(false);
    let [switchOn, setSwitch] = useState(false);
    let [switchOnUncontroll, setSwitchUncontroll] = useState(false);
    let [select, setSelect] = useState<number>(2)

    const onClick = (value: any)=>alert(value)

    const selectItems: Array<ItemType> = [
        {value: "1", title: "SPb"},
        {value: "2", title: "SFC"},
        {value: "3", title: "SAC"},
        {value: "4", title: "CHI"}
    ]

    function changeSelect(value: number) {
        setSelect(value)
    };

    return (
        <div className="App">

            <OnOff on={switchOn} onChange={setSwitch} />
            <UnControlledOnOff onChange={setSwitchUncontroll}/> {switchOnUncontroll.toString()}

            <Accordion
                titleValue={"Controlled Acc"}
                onChange={ ()=> {setAccodionCollapsed(!accodionCollapsed)} }
                collapsed={accodionCollapsed}
                items={[{title:"ten", value: "10"},
                        {title:"seven", value: "7"} ]}
                onClick={onClick}/>

            <UnControlledAccordion
                titleValue={"UN-Controll Acc"} />

            <Rating
                value={ratingValue}
                onClick={setRatingValue} />

            <UnControlledRating />
            <UnControlledRating />
            <UnControlledRating />
            <UnControlledRating />

            <Select value={"2"} onChange={()=> {}} items={selectItems}  />
        </div>
    );
}

export default App;