import React, {useEffect, useState} from 'react';

type PropsType = {}
export const Clock: React.FC<PropsType> = (props) => {

    const  [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(()=>{
            setDate(new Date())
        }, 1000);

        return () => clearInterval(intervalID)
    }, [])

    const get2DigitString = (num: number) => num < 10 ? "0" + num : num;

    return (
        <div>
            <span>{get2DigitString(date.getHours())}</span>
            :
            <span>{get2DigitString(date.getMinutes())}</span>
            :
            <span>{get2DigitString(date.getSeconds())}</span>
        </div>
    );
};