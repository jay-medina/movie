import React, { useState } from "react";

export function App(): JSX.Element {
    const [count, setCount] = useState(0);

    const onClick = () => {
        setCount(count + 1);
    };

    return (
        <div className="App">
            <h2 className="App-header">
                Page has been open for <code>{count}</code> seconds.
            </h2>
            <p>
                <button onClick={onClick}>Click me</button>
            </p>
        </div>
    );
}
