import React, { useState } from 'react';
import Tweet from './Tweet';


function App() {

    // const [name,function to change value] = 
    // const [isRed, setRed] = useState(false);
    // const [count, setCount] = useState(0);

    // const increment = () => {

    //     setCount(count + 1);
    //     setRed(!isRed);
    // }

    const [users, setUsers] = useState([
        { name: 'teemo', message: 'one two three four' },
        { name: 'twicth', message: 'one two three' },
        { name: 'gnar', message: 'one two' },
    ])
    return (
        <div className="app">
            {/* <Tweet name="Teemo" tweet="Captain Teemo on Duty!" like="1000" />
            <Tweet name="Yasuo" tweet="Hasagi!" like="-100" />
            <Tweet name="Twicth" tweet="Its ME!!!" like="5" />
            <Tweet name="Kled" tweet="im handsome" like="0" /> */}
            {/* <h1 className={isRed ? "red" : ""}>Change color</h1>
            <button onClick={increment}>Increment</button>
            <h1>{count}</h1> */}
            {users.map(user => (
                <Tweet name={user.name} tweet={user.message} />
            ))}

        </div>
    );

}

export default App; 