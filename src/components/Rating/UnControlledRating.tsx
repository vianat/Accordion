import React, {useState} from 'react';

type RatingPropsType = {
}

function Rating(props: RatingPropsType) {

    let [value, setValue] = useState(0)

    return <div>
            <Star selected={value > 0} setValue={ () => {setValue(1)}} />
            <Star selected={value > 1} setValue={ () => {setValue(2)}} />
            <Star selected={value > 2} setValue={ () => {setValue(3)}} />
            <Star selected={value > 3} setValue={ () => {setValue(4)}} />
            <Star selected={value > 4} setValue={ () => {setValue(5)}} />
        </div>
}

type StarPropsType = {
    selected: boolean
    setValue: () => void
}

function Star(props: StarPropsType) {
            if(props.selected) {
                return <span>
                            <img src="https://webstockreview.net/images/star-icon-png-10.png" alt=""/>
                        </span>
            } else {
                return <span onClick={ () => { props.setValue()} }>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYD7EJLtRasdI-EUDldJDxkpIWeFvjLX82LQ&usqp=CAU" alt=""/>
                        </span>
            }
}

export default Rating;