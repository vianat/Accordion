import React from 'react';

export type ItemType= {
    value: string
    title: string
}

type SelectPropsType= {
    value: any
    onChange:(value: any) => void
    items: ItemType[]
}
const Select = (props: SelectPropsType) => {

    const selectedItem = props.items.find(i => i.value === props.value)


    return (
        <div>
            <h3>{selectedItem && selectedItem.title}</h3>
            {props.items.map(i => <div key={i.value}>{i.title}</div>)}
        </div>
    );
};

export default Select;