import React, {useState} from "react";

export default {
    title: "ReactMemo.demo"
}

const MessegeCounter = (props: {count: number}) => {
    return <div>{props.count}</div>
}

const UsersForMemo = (props: { users: Array<string> }) => {
    return <div>
        {props.users.map( (u,i) =><div key = {i}>{u}</div> )}
    </div>
}
const Users = React.memo(UsersForMemo);

export const MemoExample = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["one", "two"])

    const  addUser = () => {
        const newUsers = [...users, "" + new Date().getTime()]
        setUsers(newUsers);
    }

    return <div>
            <button onClick={ () => setCounter(counter+1) }>+</button>
            <button onClick={addUser}>addUsers</button>

            <MessegeCounter count={counter}/>
            <Users users={users}/>
    </div>
}