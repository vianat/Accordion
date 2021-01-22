import React, {useState} from 'react';
import './App.css';
import Rating, {RatingValueType} from './components/Rating/Rating';
import UnControlledAccordion from "./components/accordion/UnControlledAccordion";
import UnControlledRating from "./components/Rating/UnControlledRating";
import Accordion from './components/accordion/Accordion';
import OnOff from './components/OnOff/OnOff';
import UnControlledOnOff from './components/OnOff/UnControlledOnOff';

function App(props: any) {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(1);
    let [accodionCollapsed, setAccodionCollapsed] = useState<boolean>(true);
    let [on, setOn] = useState(false);

    return (
        <div className="App">
            <OnOff on={on} setOn={setOn} />
            <UnControlledOnOff />

            <Accordion
                titleValue={"Controlled Acc"}
                collapsed={accodionCollapsed}
                onClick={setAccodionCollapsed} />

            <UnControlledAccordion
                titleValue={"Non-Controll Acc"} />

            <Rating
                value={ratingValue}
                onClick={setRatingValue} />

            <UnControlledRating />
        </div>
    );
}

export default App;