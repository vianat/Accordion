import React from 'react';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void;
}

function Rating(props: RatingPropsType) {

    return <div>
        <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
        <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
        <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
        <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
        <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
    </div>
}

type StarPropsType = {
    selected: boolean
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

function Star(props: StarPropsType) {

    if (props.selected) {
        return <span>
                    <img src="https://webstockreview.net/images/star-icon-png-10.png" alt=""/>
                </span>
    } else {
        return <span onClick={ ()=> {props.onClick(props.value)} } >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYD7EJLtRasdI-EUDldJDxkpIWeFvjLX82LQ&usqp=CAU" alt=""/>
                </span>
    }
}

export default Rating;