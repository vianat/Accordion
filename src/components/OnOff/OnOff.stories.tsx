import Rating, {RatingValueType} from "./Rating";
import React, {useState} from 'react'

export default {
    title: 'Rating stories',
    component: Rating
};

export const EmptyRating = () => <Rating value={0} onClick={x=>x}/>;

export const Rating1 = () => <Rating value={1} onClick={x=>x}/>;

export const Rating2 = () => <Rating value={2} onClick={x=>x}/>;

export const Rating3 = () => <Rating value={3} onClick={x=>x}/>;

export const Rating4 = () => <Rating value={4} onClick={x=>x}/>;

export const Rating5 = () => <Rating value={5} onClick={x=>x}/>;

export const ChangeRating = () => {
    const [rating, setRating] = useState<RatingValueType>(1);
    return <Rating value={rating} onClick={setRating}/>;
}